import { ApolloProvider } from '@apollo/client'
import styled, { css } from 'styled-components'

import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'
import useCreateUserIfNeeded from 'customHooks/useCreateUserIfNeeded'
import { GetUserQuery, useGetUserQuery, useUpdateTodoItemMutation } from 'generated/graphql'

export default function App() {
  return (
    <ApolloProvider client={getApolloClient({ userId: getUserId() })}>
      <GlobalStyle />

      <WorkspaceSelector />
    </ApolloProvider>
  )
}

const Box = styled.div`
  ${({ color }) => css`
    border: 1px solid ${color || 'black'};
  `}
`

type PartialWorkspace = NonNullable<GetUserQuery['user']>['workspaces'][0]
type PartialTodoList = PartialWorkspace['todoLists'][0]
type PartialTodoItem = PartialTodoList['todoItems'][0]

const WorkspaceSelector = () => {
  useCreateUserIfNeeded()
  const currentUserId = getUserId()
  const { data } = useGetUserQuery({ variables: { userId: currentUserId } })

  return (
    <div>
      <Box>Current user: {currentUserId}</Box>

      <Box color='red'>
        <h1>workspaces</h1>
        {data?.user?.workspaces?.map(({ id, title, todoLists }) => (
          <div key={id}>
            <div>Workspace title: {title}</div>
            <Workspace todoLists={todoLists} />
          </div>
        ))}
      </Box>
    </div>
  )
}

const Workspace = ({ todoLists }: { todoLists: PartialTodoList[] }) => (
  <Box color='blue'>
    <h2>todoLists</h2>
    {todoLists.map(({ id, title, todoItems }) => (
      <div key={id}>
        <div>TodoList title: {title}</div>
        <TodoList todoItems={todoItems} />
      </div>
    ))}
  </Box>
)

const TodoList = ({ todoItems }: { todoItems: PartialTodoItem[] }) => {
  const [updateTodoMutation] = useUpdateTodoItemMutation()

  return (
    <Box color='purple'>
      <h3>todoItems</h3>
      {todoItems.map(({ id, title, cost, description, isCompleted }) => {
        const updateTodo = ({
          todoItemTitle,
          todoItemCost,
          todoItemDescription,
          todoItemIsCompleted,
        }: {
          todoItemTitle?: string
          todoItemCost?: number
          todoItemDescription?: string
          todoItemIsCompleted?: boolean
        }) => {
          updateTodoMutation({
            variables: { todoItemId: id, todoItemCost, todoItemDescription, todoItemIsCompleted, todoItemTitle },
          })
        }

        return (
          <Box color='orangered' key={id}>
            <div>
              <label htmlFor={`title-${id}`}>
                <input
                  onChange={({ target: { value } }) => updateTodo({ todoItemTitle: value })}
                  value={title}
                  id={`title-${id}`}
                />
              </label>
            </div>

            <div>
              {description && (
                <label htmlFor={`description-${id}`}>
                  <input
                    onChange={({ target: { value } }) => updateTodo({ todoItemDescription: value })}
                    value={description}
                    id={`description-${id}`}
                  />
                </label>
              )}
            </div>

            <div>
              {cost && (
                <label htmlFor={`cost-${id}`}>
                  <input
                    onChange={({ target: { value } }) => updateTodo({ todoItemCost: Number(value) })}
                    type='number'
                    value={cost}
                    id={`cost-${id}`}
                  />
                </label>
              )}
            </div>

            <div>
              <label htmlFor={`isCompleted-${id}`}>
                isCompleted
                <input
                  checked={isCompleted}
                  onChange={() => updateTodo({ todoItemIsCompleted: !isCompleted })}
                  type='checkbox'
                  name='isCompleted'
                  id={`isCompleted-${id}`}
                />
              </label>
            </div>
          </Box>
        )
      })}
    </Box>
  )
}
