import { ReactNode, useEffect } from 'react'

import { useCreateUserMutation, useGetUserQuery } from 'generated/graphql'
import { getUserId } from 'utils/apolloClient'

export default function RequireUser({ children }: { children: ReactNode }) {
  const currentUserId = getUserId()
  const { data: userData, loading, refetch } = useGetUserQuery({ variables: { userId: currentUserId } })
  const [createUser] = useCreateUserMutation({ onCompleted: () => refetch() })

  useEffect(() => {
    if (loading || userData?.user?.id === currentUserId) return

    createUser()
  }, [loading, createUser, currentUserId, userData?.user?.id])

  if (!userData?.user?.id) return null

  return <>{children}</>
}
