import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { v4 as uuidv4 } from 'uuid'

export const getApolloClient = ({ userId }: { userId?: string } = {}) => {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
  })

  const wsLink = new WebSocketLink({
    uri: process.env.REACT_APP_API_SUBSCRIPTION_URL!,
    options: {
      reconnect: true,
    },
  })

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      'current-user-id': userId,
    },
  }))

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink,
    authLink.concat(httpLink),
  )

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
    connectToDevTools: process.env.NODE_ENV !== 'production',
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
