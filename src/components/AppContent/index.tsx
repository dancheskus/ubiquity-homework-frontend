import { useState } from 'react'

import useCreateUserIfNeeded from 'customHooks/useCreateUserIfNeeded'
import { getUserId } from 'utils/apolloClient'
import { useGetUserQuery } from 'generated/graphql'
import Workspace from 'components/Workspace'

import { AppContentStyle, Header, Sidebar, SidebarWorkspaceButton, MainContent } from './style'

export default function AppContent() {
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
