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

  span {
    font-weight: 200;
  }
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
        <h3>
          User ID: <span>{currentUserId}</span>
        </h3>
      </Header>
      <Sidebar>
        {data?.user?.workspaces?.map(({ id, title }) => (
          <SidebarWorkspaceButton onClick={() => setActiveWorkspace(id)} active={activeWorkspace === id} key={id}>
            {title}
          </SidebarWorkspaceButton>
        ))}
      </Sidebar>

      <MainContent>{currentWorkspaceTodoLists && <Workspace todoLists={currentWorkspaceTodoLists} />}</MainContent>
    </AppContentStyle>
  )
}

const TodoListsContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 30rem);
  column-gap: 2rem;
  align-items: start;
`
const TodoListWrapper = styled.div`
  background: #a4a4c7;
  border-radius: 5px;
  overflow: hidden;
`

const TodoListTitle = styled.h3`
  background: #ffffff29;
  padding: 1rem;
`

const TodoItemWrapper = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
`

const TodoItem = styled.div`
  background: #eee;
  padding: 1rem;
  border-radius: 5px;
`

const Workspace = ({ todoLists }: { todoLists: PartialTodoList[] }) => (
  <TodoListsContainer>
    {todoLists.map(({ id, title, todoItems }) => (
      <TodoListWrapper key={id}>
        <TodoListTitle>{title}</TodoListTitle>

        <TodoList todoItems={todoItems} />
      </TodoListWrapper>
    ))}
  </TodoListsContainer>
)

// return (
// <Box color='blue'>
//   <h2>todoLists</h2>
//   {todoLists.map(({ id, title, todoItems }) => (
//     <div key={id}>
//       <div>TodoList title: {title}</div>
//       <TodoList todoItems={todoItems} />
//     </div>
//   ))}
// </Box>
// )

const TodoItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TodoItemTitle = styled.h4`
  font-weight: 300;
`

const TodoItemDescription = styled.div`
  font-size: 1.4rem;
`

const Divider = styled.div`
  height: 1px;
  background: #000;
  margin: 1rem 0;
`

const TodoItemCompletedToggle = styled.div<{ isChecked?: boolean }>`
  ${({ isChecked }) => css`
    width: 2rem;
    height: 2rem;
    border: 2px solid #a4a4c7;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    ${isChecked &&
    css`
      :after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        background: #a4a4c7;
      }
    `}
  `}
`

const TodoList = ({ todoItems }: { todoItems: PartialTodoItem[] }) => {
  const [updateTodoMutation] = useUpdateTodoItemMutation()

  return (
    <TodoItemWrapper>
      {todoItems.map(({ id, title, description, isCompleted }) => {
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
          <TodoItem key={id}>
            <TodoItemHeader>
              <TodoItemTitle>{title}</TodoItemTitle>
              <TodoItemCompletedToggle
                onClick={() => updateTodo({ todoItemIsCompleted: !isCompleted })}
                isChecked={isCompleted}
              />
            </TodoItemHeader>
            {description && (
              <>
                <Divider />
                <TodoItemDescription>{description}</TodoItemDescription>
              </>
            )}
          </TodoItem>
        )
      })}
    </TodoItemWrapper>
  )

  // return (
  //   <Box color='purple'>
  //     <h3>todoItems</h3>
  //     {todoItems.map(({ id, title, cost, description, isCompleted }) => {
  //       const updateTodo = ({
  //         todoItemTitle,
  //         todoItemCost,
  //         todoItemDescription,
  //         todoItemIsCompleted,
  //       }: {
  //         todoItemTitle?: string
  //         todoItemCost?: number
  //         todoItemDescription?: string
  //         todoItemIsCompleted?: boolean
  //       }) => {
  //         updateTodoMutation({
  //           variables: { todoItemId: id, todoItemCost, todoItemDescription, todoItemIsCompleted, todoItemTitle },
  //         })
  //       }

  //       return (
  //         <Box color='orangered' key={id}>
  //           <div>
  //             <label htmlFor={`title-${id}`}>
  //               <input
  //                 onChange={({ target: { value } }) => updateTodo({ todoItemTitle: value })}
  //                 value={title}
  //                 id={`title-${id}`}
  //               />
  //             </label>
  //           </div>

  //           <div>
  //             {description && (
  //               <label htmlFor={`description-${id}`}>
  //                 <input
  //                   onChange={({ target: { value } }) => updateTodo({ todoItemDescription: value })}
  //                   value={description}
  //                   id={`description-${id}`}
  //                 />
  //               </label>
  //             )}
  //           </div>

  //           <div>
  //             {cost && (
  //               <label htmlFor={`cost-${id}`}>
  //                 <input
  //                   onChange={({ target: { value } }) => updateTodo({ todoItemCost: Number(value) })}
  //                   type='number'
  //                   value={cost}
  //                   id={`cost-${id}`}
  //                 />
  //               </label>
  //             )}
  //           </div>

  //           <div>
  //             <label htmlFor={`isCompleted-${id}`}>
  //               isCompleted
  //               <input
  //                 checked={isCompleted}
  //                 onChange={() => updateTodo({ todoItemIsCompleted: !isCompleted })}
  //                 type='checkbox'
  //                 name='isCompleted'
  //                 id={`isCompleted-${id}`}
  //               />
  //             </label>
  //           </div>
  //         </Box>
  //       )
  //     })}
  //   </Box>
  // )
}
