import styled from 'styled-components'

import TodoList from './TodoList'
import { PartialTodoList } from './types'

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

export default function Workspace({ todoLists }: { todoLists: PartialTodoList[] }) {
  return (
    <TodoListsContainer>
      {todoLists.map(({ id, title, todoItems }) => (
        <TodoListWrapper key={id}>
          <TodoListTitle>{title}</TodoListTitle>

          <TodoList todoListId={id} todoItems={todoItems} />
        </TodoListWrapper>
      ))}
    </TodoListsContainer>
  )
}
