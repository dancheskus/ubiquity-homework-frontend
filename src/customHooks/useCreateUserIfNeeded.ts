import { useEffect } from 'react'

import { useCreateUserMutation, useGetUserQuery } from 'generated/graphql'
import { getUserId } from 'utils/apolloClient'

export default function useCreateUserIfNeeded() {
  const currentUserId = getUserId()
  const { data: userData, loading } = useGetUserQuery({ variables: { userId: currentUserId } })
  const [createUser] = useCreateUserMutation()

  useEffect(() => {
    if (loading || userData?.user?.id === currentUserId) return
    createUser()
  }, [loading, createUser, currentUserId, userData?.user?.id])
}
