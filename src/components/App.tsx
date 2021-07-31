import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { useEffect } from 'react'

import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'

const GET_USERS_QUERY = gql`
  {
    users {
      id
    }
  }
`

export default function App() {
  return (
    <ApolloProvider client={getApolloClient({ userId: getUserId() })}>
      <GlobalStyle />

      <Test />
    </ApolloProvider>
  )
}

const Test = () => {
  const { loading, error, data, refetch, client } = useQuery(GET_USERS_QUERY)
  console.log(data)
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
