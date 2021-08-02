import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'

import AppContent from './AppContent'

export default function App() {
  return (
    <ApolloProvider client={getApolloClient({ userId: getUserId() })}>
      <BrowserRouter>
        <GlobalStyle />

        <AppContent />
      </BrowserRouter>
    </ApolloProvider>
  )
}
