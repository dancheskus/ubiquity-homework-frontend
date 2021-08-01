import { useDeleteTodoListMutation, useGetWorkspaceByIdLazyQuery, useUpdateTodoListMutation } from 'generated/graphql'

import TodoList from '../TodoList'
import { PartialTodoList } from '../types'
import { TodoListsContainer, TodoListWrapper, TodoListHeader, TodoListTitle, RemoveTodoListButton } from './style'

export default function Workspace({ workspaceId, todoLists }: { todoLists: PartialTodoList[]; workspaceId: string }) {
  const [refetchWorkspace] = useGetWorkspaceByIdLazyQuery({ variables: { id: workspaceId } })
  const [updateListMutation] = useUpdateTodoListMutation()
  const [deleteTodoListMutation] = useDeleteTodoListMutation({ onCompleted: () => refetchWorkspace() })

  return (
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
  )
}
