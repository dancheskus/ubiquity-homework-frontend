import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'

import { useGetUsersQuery } from 'generated/graphql'
import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'

export default function App() {
  return (
    <ApolloProvider client={getApolloClient({ userId: getUserId() })}>
      <GlobalStyle />

      <Test />
    </ApolloProvider>
  )
}

const Test = () => {
  const { loading, error, data, refetch, client } = useGetUsersQuery()
  console.log(data?.users[0].id)
  console.log(error)
  return (
    <div>
      test
      <button
        type='button'
        // onClick={() => {
        //   client
        //     .query({
        //       query: GET_USERS_QUERY,
        //     })
        //     .then(({ data }) => console.log(data))
        // }}
      >
        refetch
      </button>
    </div>
  )
}
