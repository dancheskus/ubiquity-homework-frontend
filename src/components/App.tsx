import { ApolloProvider } from '@apollo/client'
import styled, { css } from 'styled-components'

import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'
import useCreateUserIfNeeded from 'customHooks/useCreateUserIfNeeded'
import { useGetUserQuery } from 'generated/graphql'

export default function App() {
  return (
    <ApolloProvider client={getApolloClient({ userId: getUserId() })}>
      <GlobalStyle />

      <Main />
    </ApolloProvider>
  )
}

const Box = styled.div`
  ${({ color }) => css`
    border: 1px solid ${color || 'black'};
  `}
`

const Main = () => {
  useCreateUserIfNeeded()
  const currentUserId = getUserId()
  const { data } = useGetUserQuery({ variables: { userId: currentUserId } })

  return (
    <div>
      <Box>Current user: {currentUserId}</Box>
      <Box color='red'>
        <h2>workspaces</h2>
        {data?.user?.workspaces.map(workspace => {
          const { id, title } = workspace || {}

          return <div key={id}>{title}</div>
        })}

        <div />
      </Box>
    </div>
  )
}
