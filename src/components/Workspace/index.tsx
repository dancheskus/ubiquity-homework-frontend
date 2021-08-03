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
  useTodoListDeletedSubscription,
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

interface Props {
  workspaceId: string
  isOwner: boolean
}

export default function Workspace({ workspaceId, isOwner }: Props) {
  const history = useHistory()
  const { data, refetch: refetchWorkspace } = useGetWorkspaceByIdQuery({ variables: { id: workspaceId } })
  const [updateListMutation] = useUpdateTodoListMutation()
  const [deleteTodoListMutation] = useDeleteTodoListMutation()
  const [createTodoListMutation] = useCreateTodoListMutation()
  const userId = getUserId()
  const [refetchUser] = useGetUserLazyQuery({
    variables: { userId },
    fetchPolicy: 'network-only',
    onCompleted: () => history.push('/'),
  })
  const [deleteWorkspaceMutation] = useDeleteWorkspaceMutation({ onCompleted: () => refetchUser() })
  useTodoListCreatedSubscription({ variables: { workspaceId }, onSubscriptionData: () => refetchWorkspace() })
  useTodoListDeletedSubscription({ variables: { workspaceId }, onSubscriptionData: () => refetchWorkspace() })

  useEffect(() => {
    refetchWorkspace()
  }, [refetchWorkspace, workspaceId])

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
              <RemoveTodoListButton
                onClick={() => deleteTodoListMutation({ variables: { todoListId: id, workspaceId } })}
              >
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

            {/* <Button
              onClick={() => {
                console.log('lock')
              }}
            >
              Lock Workspace
            </Button> */}
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
