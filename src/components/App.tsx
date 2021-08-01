import { ApolloProvider } from '@apollo/client'
import styled, { css } from 'styled-components'

import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'
import useCreateUserIfNeeded from 'customHooks/useCreateUserIfNeeded'
import { GetUserQuery, useGetUserQuery } from 'generated/graphql'

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

const TodoList = ({ todoItems }: { todoItems: PartialTodoItem[] }) => (
  <Box color='purple'>
    <h3>todoItems</h3>
    {todoItems.map(({ id, title, cost, description, isCompleted }) => (
      <Box color='orangered' key={id}>
        <div>TodoItem title: {title}</div>
        <div>TodoItem description: {description}</div>
        <div>TodoItem cost: {cost}</div>
      </Box>
    ))}
  </Box>
)
