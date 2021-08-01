import { ApolloProvider } from '@apollo/client'
import styled, { css } from 'styled-components'
import { useState } from 'react'

import GlobalStyle from 'style/GlobalStyle'
import { getApolloClient, getUserId } from 'utils/apolloClient'
import useCreateUserIfNeeded from 'customHooks/useCreateUserIfNeeded'
import { GetUserQuery, useGetUserQuery, useUpdateTodoItemMutation } from 'generated/graphql'

export default function App() {
  return (
    <ApolloProvider client={getApolloClient({ userId: getUserId() })}>
      <GlobalStyle />

      <AppContent />
    </ApolloProvider>
  )
}

const Box = styled.div`
  ${({ color }) => css`
    border: 1px solid ${color || 'black'};
  `}
`

const AppContentStyle = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 8rem 1fr;
  grid-template-areas:
    'header header'
    'sidebar main';
`

const Header = styled.header`
  grid-area: header;
  background: #eee;
  display: flex;
  align-items: center;
  padding: 0 4rem;
`

const Sidebar = styled.section`
  grid-area: sidebar;
  background: #7373c5;
`
const SidebarWorkspaceButton = styled.div<{ active?: boolean }>`
  ${({ active }) => css`
    background: ${active ? '#a4a4c7' : '#8282be'};
    padding: 3rem;
    color: white;
    transition: 0.2s;

    ${!active &&
    css`
      cursor: pointer;

      :hover {
        background: #9494c2;
      }
    `}

    :not(:last-child) {
      border-bottom: 1px solid #727272;
    }
  `}
`

const MainContent = styled.section`
  grid-area: main;
  background: #fcfcfc;
`

type PartialWorkspace = NonNullable<GetUserQuery['user']>['workspaces'][0]
type PartialTodoList = PartialWorkspace['todoLists'][0]
type PartialTodoItem = PartialTodoList['todoItems'][0]

const AppContent = () => {
  useCreateUserIfNeeded()
  const [activeWorkspace, setActiveWorkspace] = useState<null | string>()

  const currentUserId = getUserId()
  const { data } = useGetUserQuery({ variables: { userId: currentUserId } })
  const currentWorkspaceTodoLists = data?.user?.workspaces.find(({ id }) => id === activeWorkspace)?.todoLists

  return (
    <AppContentStyle>
      <Header>
        <h3>User ID: {currentUserId}</h3>
      </Header>
      <Sidebar>
        {data?.user?.workspaces?.map(({ id, title }) => (
          <SidebarWorkspaceButton onClick={() => setActiveWorkspace(id)} active={activeWorkspace === id} key={id}>
            {title}
          </SidebarWorkspaceButton>
        ))}
      </Sidebar>

      <MainContent>{currentWorkspaceTodoLists && <Workspace todoLists={currentWorkspaceTodoLists} />}</MainContent>
      {/* <Box>Current user: {currentUserId}</Box>

      <Box color='red'>
        <h1>workspaces</h1>
        {data?.user?.workspaces?.map(({ id, title, todoLists }) => (
          <div key={id}>
            <div>Workspace title: {title}</div>
            <Workspace todoLists={todoLists} />
          </div>
        ))}
      </Box> */}
    </AppContentStyle>
  )
}

const Workspace = ({ todoLists }: { todoLists: PartialTodoList[] }) => (
  <Box color='blue'>
    <h2>todoLists</h2>
    {todoLists.map(({ id, title, todoItems }) => (
      <div key={id}>
        <div>TodoList title: {title}</div>
        <TodoList todoItems={todoItems} />
      </div>
    ))}
  </Box>
)

const TodoList = ({ todoItems }: { todoItems: PartialTodoItem[] }) => {
  const [updateTodoMutation] = useUpdateTodoItemMutation()

  return (
    <Box color='purple'>
      <h3>todoItems</h3>
      {todoItems.map(({ id, title, cost, description, isCompleted }) => {
        const updateTodo = ({
          todoItemTitle,
          todoItemCost,
          todoItemDescription,
          todoItemIsCompleted,
        }: {
          todoItemTitle?: string
          todoItemCost?: number
          todoItemDescription?: string
          todoItemIsCompleted?: boolean
        }) => {
          updateTodoMutation({
            variables: { todoItemId: id, todoItemCost, todoItemDescription, todoItemIsCompleted, todoItemTitle },
          })
        }

        return (
          <Box color='orangered' key={id}>
            <div>
              <label htmlFor={`title-${id}`}>
                <input
                  onChange={({ target: { value } }) => updateTodo({ todoItemTitle: value })}
                  value={title}
                  id={`title-${id}`}
                />
              </label>
            </div>

            <div>
              {description && (
                <label htmlFor={`description-${id}`}>
                  <input
                    onChange={({ target: { value } }) => updateTodo({ todoItemDescription: value })}
                    value={description}
                    id={`description-${id}`}
                  />
                </label>
              )}
            </div>

            <div>
              {cost && (
                <label htmlFor={`cost-${id}`}>
                  <input
                    onChange={({ target: { value } }) => updateTodo({ todoItemCost: Number(value) })}
                    type='number'
                    value={cost}
                    id={`cost-${id}`}
                  />
                </label>
              )}
            </div>

            <div>
              <label htmlFor={`isCompleted-${id}`}>
                isCompleted
                <input
                  checked={isCompleted}
                  onChange={() => updateTodo({ todoItemIsCompleted: !isCompleted })}
                  type='checkbox'
                  name='isCompleted'
                  id={`isCompleted-${id}`}
                />
              </label>
            </div>
          </Box>
        )
      })}
    </Box>
  )
}
