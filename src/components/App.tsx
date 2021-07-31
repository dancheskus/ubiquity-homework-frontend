import { ApolloProvider } from '@apollo/client'
import styled, { css } from 'styled-components'

import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'
import useCreateUserIfNeeded from 'customHooks/useCreateUserIfNeeded'
import { useGetTodoListsByWorkspaceQuery, useGetUserQuery } from 'generated/graphql'

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

const WorkspaceSelector = () => {
  useCreateUserIfNeeded()
  const currentUserId = getUserId()
  const { data } = useGetUserQuery({ variables: { userId: currentUserId } })

  return (
    <div>
      <Box>Current user: {currentUserId}</Box>
      <Box color='red'>
        <h1>workspaces</h1>
        {data?.user?.workspaces?.map(({ id: workspaceId, title: workspaceTitle }) => (
          <div key={workspaceId}>
            <div>Workspace name: {workspaceTitle}</div>
            <Workspace workspaceId={workspaceId} />
          </div>
        ))}

        <div />
      </Box>
    </div>
  )
}

const Workspace = ({ workspaceId }: { workspaceId: string }) => {
  const { data } = useGetTodoListsByWorkspaceQuery({ variables: { workspaceId } })

  return (
    <Box color='blue'>
      <h2>todoLists</h2>
      {data?.todoLists.map(({ id, title }) => (
        <div key={id}>TodoList name: {title}</div>
      ))}
    </Box>
  )
}
