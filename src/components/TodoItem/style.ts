import styled, { css } from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const TodoItemStyle = styled.div`
  background: #eee;
  padding: 1rem;
  border-radius: 5px;
`

export const TodoItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TodoItemTitle = styled.input`
  width: 90%;
  font-size: 1.6rem;
`

export const TodoItemDescription = styled(TextareaAutosize)`
  font-size: 1.4rem;
  width: 100%;
`

export const Divider = styled.div`
  height: 1px;
  background: #000;
  margin: 1rem 0;
`

export const TodoItemCompletedToggle = styled.div<{ isChecked?: boolean }>`
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

export const TodoItemActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`

export const TodoItemActionButton = styled.button`
  background: #7373c5;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 2rem;
  cursor: pointer;
`
