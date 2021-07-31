import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { v4 as uuidv4 } from 'uuid'

export const getApolloClient = ({ userId }: { userId?: string } = {}) => {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
  })

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      'current-user-id': userId,
    },
  }))

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })
}

export const getUserId = () => {
  let currentUserId = localStorage.getItem('currentUserId')

  if (!currentUserId) {
    currentUserId = uuidv4()
    localStorage.setItem('currentUserId', currentUserId)
  }

  return currentUserId
}
