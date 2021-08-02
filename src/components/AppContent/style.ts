import styled, { css } from 'styled-components'

export const AppContentStyle = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 8rem 1fr;
  grid-template-areas:
    'header header'
    'sidebar main';
`

export const Header = styled.header`
  grid-area: header;
  background: #eee;
  display: flex;
  align-items: center;
  padding: 0 4rem;

  span {
    font-weight: 200;
  }
`

export const Sidebar = styled.section`
  grid-area: sidebar;
  background: #7373c5;
`
export const SidebarWorkspaceButton = styled.div<{ active?: boolean }>`
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

export const MainContent = styled.section`
  grid-area: main;
  background: #fcfcfc;
  display: grid;
  grid-template-rows: 1fr 6rem;
  overflow: auto;
`
