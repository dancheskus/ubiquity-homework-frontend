import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

import TodoList from 'components/TodoList'
import {
  useCreateTodoListMutation,
  useDeleteTodoListMutation,
  useDeleteWorkspaceMutation,
  useGetUserLazyQuery,
  useGetWorkspaceByIdQuery,
  useTodoListCreatedSubscription,
  useUpdateTodoListMutation,
} from 'generated/graphql'
import Button from 'style/Button'
import { getUserId } from 'utils/apolloClient'

import {
  TodoListsContainer,
  TodoListWrapper,
  TodoListHeader,
  TodoListTitle,
  RemoveTodoListButton,
  WorkspaceFooter,
} from './style'

export default function Workspace({ workspaceId, isOwner }: { workspaceId: string; isOwner: boolean }) {
  const history = useHistory()
  const { data, refetch: refetchWorkspace } = useGetWorkspaceByIdQuery({
    variables: { id: workspaceId },
  })

  useEffect(() => {
    refetchWorkspace()
  }, [refetchWorkspace])
  const [updateListMutation] = useUpdateTodoListMutation()
  const [deleteTodoListMutation] = useDeleteTodoListMutation({ onCompleted: () => refetchWorkspace() })
  const [createTodoListMutation] = useCreateTodoListMutation()
  const userId = getUserId()
  const [refetchUser] = useGetUserLazyQuery({
    variables: { userId },
    fetchPolicy: 'network-only',
    onCompleted: () => history.push('/'),
  })
  const [deleteWorkspaceMutation] = useDeleteWorkspaceMutation({ onCompleted: () => refetchUser() })
  useTodoListCreatedSubscription({ variables: { workspaceId }, onSubscriptionData: () => refetchWorkspace() })

  return (
    <>
      <TodoListsContainer>
        {data?.getWorkspace?.todoLists?.map(({ id, title, todoItems }) => (
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
        {isOwner && (
          <>
            <Button onClick={() => deleteWorkspaceMutation({ variables: { workspaceId } })}>Remove Workspace</Button>

            <Button
              onClick={() => {
                console.log('lock')
              }}
            >
              Lock Workspace
            </Button>
          </>
        )}

        <CopyToClipboard text={window.location.href}>
          <Button>Copy Workspace Link</Button>
        </CopyToClipboard>

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
      </WorkspaceFooter>
    </>
  )
}
