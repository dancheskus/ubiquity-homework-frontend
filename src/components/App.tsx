import { ApolloProvider } from '@apollo/client'

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
