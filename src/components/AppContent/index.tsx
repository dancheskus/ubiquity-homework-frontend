import { useHistory, useLocation } from 'react-router-dom'

import useCreateUserIfNeeded from 'customHooks/useCreateUserIfNeeded'
import { getUserId } from 'utils/apolloClient'
import {
  useCreateWorkspaceMutation,
  useGetUserQuery,
  useGetUsersLazyQuery,
  useGetWorkspaceByIdQuery,
} from 'generated/graphql'
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
  const currentUserId = getUserId()
  const { data: user } = useGetUserQuery({ variables: { userId: currentUserId } })
  const [refetchUser] = useGetUsersLazyQuery({ fetchPolicy: 'network-only' })
  const [createWorkspaceMutation] = useCreateWorkspaceMutation({ onCompleted: () => refetchUser() })
  const history = useHistory()
  const location = useLocation()
  const [, activeWorkspaceId] = location.pathname.match(/\/workspace\/(.+)/) ?? []
  const { data: currentWorkspaceData } = useGetWorkspaceByIdQuery({ variables: { id: activeWorkspaceId ?? '' } })

  const { data } = useGetUserQuery({ variables: { userId: currentUserId } })

  const currentWorkspace = currentWorkspaceData?.getWorkspace

  const currentWorkspaceTodoLists = currentWorkspace?.todoLists

  const isOwner = !!user?.user?.workspaces.find(({ id }) => id === activeWorkspaceId)

  return (
    <AppContentStyle>
      <Header>
        <h3>
          User ID: <span>{currentUserId}</span>
        </h3>
      </Header>

      <Sidebar>
        <div>
          {!isOwner && currentWorkspace && (
            <SidebarWorkspaceButton
              shared
              onClick={() => history.push(`/workspace/${currentWorkspace.id}`)}
              active={activeWorkspaceId === currentWorkspace.id}
              key={currentWorkspace.id}
            >
              {currentWorkspace.title}
            </SidebarWorkspaceButton>
          )}

          {data?.user?.workspaces?.map(({ id, title }) => (
            <SidebarWorkspaceButton
              onClick={() => history.push(`/workspace/${id}`)}
              active={activeWorkspaceId === id}
              key={id}
            >
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
        {currentWorkspaceTodoLists && <Workspace isOwner={isOwner} workspaceId={activeWorkspaceId} />}
      </MainContent>
    </AppContentStyle>
  )
}
