import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, concat, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuidv4 } from 'uuid'

import App from './components/App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
