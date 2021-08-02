import { useState } from 'react'

import useCreateUserIfNeeded from 'customHooks/useCreateUserIfNeeded'
import { getUserId } from 'utils/apolloClient'
import { useCreateWorkspaceMutation, useGetUserQuery, useGetUsersLazyQuery } from 'generated/graphql'
import Workspace from 'components/Workspace'
import PlusIcon from 'icons'

import {
  AppContentStyle,
  Header,
  Sidebar,
  SidebarWorkspaceButton,
  MainContent,
  SidebarAddWorkspaceIconWrapper,
} from './style'

export default function AppContent() {
  useCreateUserIfNeeded()
  const [refetchUser] = useGetUsersLazyQuery({ fetchPolicy: 'network-only' })
  const [createWorkspaceMutation] = useCreateWorkspaceMutation({ onCompleted: () => refetchUser() })
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
        <div>
          {data?.user?.workspaces?.map(({ id, title }) => (
            <SidebarWorkspaceButton onClick={() => setActiveWorkspace(id)} active={activeWorkspace === id} key={id}>
              {title}
            </SidebarWorkspaceButton>
          ))}
        </div>

        <SidebarAddWorkspaceIconWrapper
          onClick={() => {
            const workspaceTitle = prompt('Workspace title')
            if (!workspaceTitle) return

            createWorkspaceMutation({ variables: { workspaceTitle } })
          }}
        >
          <PlusIcon />
        </SidebarAddWorkspaceIconWrapper>
      </Sidebar>

      <MainContent>
        {currentWorkspaceTodoLists && (
          <Workspace workspaceId={activeWorkspace!} todoLists={currentWorkspaceTodoLists} />
        )}
      </MainContent>
    </AppContentStyle>
  )
}
