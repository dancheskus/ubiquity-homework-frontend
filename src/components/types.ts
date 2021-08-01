import { GetUserQuery } from 'generated/graphql'

type PartialWorkspace = NonNullable<GetUserQuery['user']>['workspaces'][0]
export type PartialTodoList = PartialWorkspace['todoLists'][0]
export type PartialTodoItem = PartialTodoList['todoItems'][0]
