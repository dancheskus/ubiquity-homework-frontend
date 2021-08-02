import TodoList from 'components/TodoList'
import {
  useCreateTodoListMutation,
  useDeleteTodoListMutation,
  useDeleteWorkspaceMutation,
  useGetUsersLazyQuery,
  useGetWorkspaceByIdLazyQuery,
  useUpdateTodoListMutation,
} from 'generated/graphql'
import Button from 'style/Button'

import { PartialTodoList } from '../types'
import {
  TodoListsContainer,
  TodoListWrapper,
  TodoListHeader,
  TodoListTitle,
  RemoveTodoListButton,
  WorkspaceFooter,
} from './style'

export default function Workspace({ workspaceId, todoLists }: { todoLists: PartialTodoList[]; workspaceId: string }) {
  const [refetchWorkspace] = useGetWorkspaceByIdLazyQuery({
    variables: { id: workspaceId },
    fetchPolicy: 'network-only',
  })
  const [refetchUser] = useGetUsersLazyQuery({ fetchPolicy: 'network-only' })
  const [updateListMutation] = useUpdateTodoListMutation()
  const [deleteTodoListMutation] = useDeleteTodoListMutation({ onCompleted: () => refetchWorkspace() })
  const [createTodoListMutation] = useCreateTodoListMutation({ onCompleted: () => refetchWorkspace() })
  const [deleteWorkspaceMutation] = useDeleteWorkspaceMutation({ onCompleted: () => refetchUser() })

  return (
    <>
      <TodoListsContainer>
        {todoLists.map(({ id, title, todoItems }) => (
          <TodoListWrapper key={id}>
            <TodoListHeader>
              {title && (
                <TodoListTitle
                  value={title}
                  onChange={({ target: { value } }) =>
                    updateListMutation({ variables: { todoListId: id, todoListTitle: value } })
                  }
                />
              )}
              <RemoveTodoListButton onClick={() => deleteTodoListMutation({ variables: { todoListId: id } })}>
                Remove
              </RemoveTodoListButton>
            </TodoListHeader>

            <TodoList todoListId={id} todoItems={todoItems} />
          </TodoListWrapper>
        ))}
      </TodoListsContainer>

      <WorkspaceFooter>
        <Button onClick={() => deleteWorkspaceMutation({ variables: { workspaceId } })}>Remove Workspace</Button>

        <Button
          onClick={() => {
            const listName = prompt('Enter list name')

            createTodoListMutation({
              variables: { todoListWorkspaceId: workspaceId, todoListTitle: listName },
            })
          }}
        >
          Add Todo List
        </Button>

        <Button
          onClick={() => {
            console.log('lock')
          }}
        >
          Lock Workspace
        </Button>

        <Button
          onClick={() => {
            console.log('copy')
          }}
        >
          Copy Workspace Link
        </Button>
      </WorkspaceFooter>
    </>
  )
}
