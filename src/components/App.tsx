import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'

import AppContent from './AppContent'
import RequireUser from './RequireUser'

export default function App() {
  return (
    <ApolloProvider client={getApolloClient({ userId: getUserId() })}>
      <BrowserRouter>
        <GlobalStyle />

        <RequireUser>
          <AppContent />
        </RequireUser>
      </BrowserRouter>
    </ApolloProvider>
  )
}
