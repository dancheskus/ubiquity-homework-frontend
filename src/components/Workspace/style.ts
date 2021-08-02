import styled from 'styled-components'

export const TodoListsContainer = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 30rem);
  column-gap: 2rem;
  align-items: start;
  overflow: auto;
`
export const TodoListWrapper = styled.div`
  background: #a4a4c7;
  border-radius: 5px;
  overflow: hidden;
`

export const TodoListHeader = styled.div`
  padding: 1rem;
  background: #ffffff29;
  display: flex;
  justify-content: space-between;
`

export const TodoListTitle = styled.input`
  font-size: 1.8rem;
`

export const RemoveTodoListButton = styled.button`
  padding: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    filter: brightness(1.05);
  }
`

export const WorkspaceFooter = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  justify-items: end;
  align-items: center;
  justify-content: end;
  background: #b3b3d0;
  padding: 1rem;
`
