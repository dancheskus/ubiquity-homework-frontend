import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodoItem?: Maybe<TodoItem>;
  createTodoList: TodoList;
  createUser: User;
  createWorkspace: Workspace;
  deleteTodoItem?: Maybe<TodoItem>;
  deleteTodoList?: Maybe<TodoList>;
  deleteWorkspace?: Maybe<Workspace>;
  updateTodoItem?: Maybe<TodoItem>;
  updateTodoList?: Maybe<TodoList>;
  updateWorkspace?: Maybe<Workspace>;
};


export type MutationCreateTodoItemArgs = {
  cost?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  todoListId: Scalars['String'];
};


export type MutationCreateTodoListArgs = {
  title?: Maybe<Scalars['String']>;
  workspaceId: Scalars['String'];
};


export type MutationCreateWorkspaceArgs = {
  title: Scalars['String'];
};


export type MutationDeleteTodoItemArgs = {
  id: Scalars['String'];
  todoListId: Scalars['String'];
};


export type MutationDeleteTodoListArgs = {
  todoListId: Scalars['String'];
  workspaceId: Scalars['String'];
};


export type MutationDeleteWorkspaceArgs = {
  id: Scalars['String'];
};


export type MutationUpdateTodoItemArgs = {
  cost?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isCompleted?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};


export type MutationUpdateTodoListArgs = {
  id: Scalars['String'];
  isLocked?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};


export type MutationUpdateWorkspaceArgs = {
  id: Scalars['String'];
  isShared?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getWorkspace?: Maybe<Workspace>;
  todoItem?: Maybe<TodoItem>;
  todoList: TodoList;
  todoLists: Array<TodoList>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryGetWorkspaceArgs = {
  id: Scalars['String'];
};


export type QueryTodoItemArgs = {
  id: Scalars['String'];
};


export type QueryTodoListArgs = {
  id: Scalars['String'];
};


export type QueryTodoListsArgs = {
  workspaceId: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  createTodoItem?: Maybe<TodoList>;
  createTodoList?: Maybe<TodoList>;
  deleteTodoItem?: Maybe<TodoList>;
  deleteTodoList?: Maybe<TodoList>;
  updateTodoItem?: Maybe<TodoItem>;
  updateTodoList?: Maybe<TodoList>;
};


export type SubscriptionCreateTodoItemArgs = {
  todoListId: Scalars['String'];
};


export type SubscriptionCreateTodoListArgs = {
  workspaceId: Scalars['String'];
};


export type SubscriptionDeleteTodoItemArgs = {
  todoListId: Scalars['String'];
};


export type SubscriptionDeleteTodoListArgs = {
  workspaceId: Scalars['String'];
};


export type SubscriptionUpdateTodoItemArgs = {
  id: Scalars['String'];
};


export type SubscriptionUpdateTodoListArgs = {
  id: Scalars['String'];
};

export type TodoItem = {
  __typename?: 'TodoItem';
  cost?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isCompleted: Scalars['Boolean'];
  title: Scalars['String'];
  todoListId: Scalars['String'];
};

export type TodoList = {
  __typename?: 'TodoList';
  id: Scalars['String'];
  isLocked: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  todoItems: Array<TodoItem>;
  workspaceId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  workspaces: Array<Workspace>;
};

export type Workspace = {
  __typename?: 'Workspace';
  id: Scalars['String'];
  isShared: Scalars['Boolean'];
  ownerId: Scalars['String'];
  title: Scalars['String'];
  todoLists: Array<TodoList>;
};

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { workspaces: Array<(
      { __typename?: 'Workspace' }
      & Pick<Workspace, 'id' | 'title' | 'isShared' | 'ownerId'>
      & { todoLists: Array<(
        { __typename?: 'TodoList' }
        & Pick<TodoList, 'id' | 'isLocked' | 'title' | 'workspaceId'>
        & { todoItems: Array<(
          { __typename?: 'TodoItem' }
          & Pick<TodoItem, 'id' | 'title' | 'description' | 'cost' | 'isCompleted'>
        )> }
      )> }
    )> }
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
    & { workspaces: Array<(
      { __typename?: 'Workspace' }
      & Pick<Workspace, 'id'>
    )> }
  )> }
);

export type CreateUserMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type CreateWorkspaceMutationVariables = Exact<{
  workspaceTitle: Scalars['String'];
}>;


export type CreateWorkspaceMutation = (
  { __typename?: 'Mutation' }
  & { createWorkspace: (
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'id' | 'title' | 'isShared' | 'ownerId'>
    & { todoLists: Array<(
      { __typename?: 'TodoList' }
      & Pick<TodoList, 'id' | 'title' | 'isLocked' | 'workspaceId'>
      & { todoItems: Array<(
        { __typename?: 'TodoItem' }
        & Pick<TodoItem, 'id' | 'title' | 'description' | 'cost' | 'isCompleted' | 'todoListId'>
      )> }
    )> }
  ) }
);

export type DeleteWorkspaceMutationVariables = Exact<{
  workspaceId: Scalars['String'];
}>;


export type DeleteWorkspaceMutation = (
  { __typename?: 'Mutation' }
  & { deleteWorkspace?: Maybe<(
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'id'>
  )> }
);

export type UpdateWorkspaceMutationVariables = Exact<{
  workspaceId: Scalars['String'];
  workspaceIsShared?: Maybe<Scalars['Boolean']>;
  workspaceTitle?: Maybe<Scalars['String']>;
}>;


export type UpdateWorkspaceMutation = (
  { __typename?: 'Mutation' }
  & { updateWorkspace?: Maybe<(
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'id' | 'title' | 'isShared'>
  )> }
);

export type GetTodoListByIdQueryVariables = Exact<{
  todoListId: Scalars['String'];
}>;


export type GetTodoListByIdQuery = (
  { __typename?: 'Query' }
  & { todoList: (
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'title' | 'isLocked' | 'workspaceId'>
    & { todoItems: Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'id' | 'title' | 'description' | 'cost' | 'isCompleted' | 'todoListId'>
    )> }
  ) }
);

export type GetWorkspaceByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetWorkspaceByIdQuery = (
  { __typename?: 'Query' }
  & { getWorkspace?: Maybe<(
    { __typename?: 'Workspace' }
    & Pick<Workspace, 'id' | 'title' | 'isShared' | 'ownerId'>
    & { todoLists: Array<(
      { __typename?: 'TodoList' }
      & Pick<TodoList, 'id' | 'title' | 'isLocked' | 'workspaceId'>
      & { todoItems: Array<(
        { __typename?: 'TodoItem' }
        & Pick<TodoItem, 'id' | 'description' | 'cost' | 'isCompleted' | 'title'>
      )> }
    )> }
  )> }
);

export type GetTodoListsByWorkspaceQueryVariables = Exact<{
  workspaceId: Scalars['String'];
}>;


export type GetTodoListsByWorkspaceQuery = (
  { __typename?: 'Query' }
  & { todoLists: Array<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'title' | 'isLocked'>
  )> }
);

export type CreateTodoListMutationVariables = Exact<{
  todoListWorkspaceId: Scalars['String'];
  todoListTitle?: Maybe<Scalars['String']>;
}>;


export type CreateTodoListMutation = (
  { __typename?: 'Mutation' }
  & { createTodoList: (
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'title' | 'isLocked'>
  ) }
);

export type TodoListCreatedSubscriptionVariables = Exact<{
  workspaceId: Scalars['String'];
}>;


export type TodoListCreatedSubscription = (
  { __typename?: 'Subscription' }
  & { createTodoList?: Maybe<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id'>
  )> }
);

export type DeleteTodoListMutationVariables = Exact<{
  todoListId: Scalars['String'];
  workspaceId: Scalars['String'];
}>;


export type DeleteTodoListMutation = (
  { __typename?: 'Mutation' }
  & { deleteTodoList?: Maybe<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id'>
  )> }
);

export type TodoListDeletedSubscriptionVariables = Exact<{
  workspaceId: Scalars['String'];
}>;


export type TodoListDeletedSubscription = (
  { __typename?: 'Subscription' }
  & { deleteTodoList?: Maybe<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id'>
  )> }
);

export type UpdateTodoListMutationVariables = Exact<{
  todoListId: Scalars['String'];
  todoListIsLocked?: Maybe<Scalars['Boolean']>;
  todoListTitle?: Maybe<Scalars['String']>;
}>;


export type UpdateTodoListMutation = (
  { __typename?: 'Mutation' }
  & { updateTodoList?: Maybe<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'title' | 'isLocked'>
  )> }
);

export type TodoListUpdatedSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type TodoListUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { updateTodoList?: Maybe<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'title' | 'isLocked' | 'workspaceId'>
    & { todoItems: Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'id'>
    )> }
  )> }
);

export type CreateTodoItemMutationVariables = Exact<{
  todoItemTitle: Scalars['String'];
  todoItemTodoListId: Scalars['String'];
  todoItemDescription?: Maybe<Scalars['String']>;
  todoItemCost?: Maybe<Scalars['Int']>;
}>;


export type CreateTodoItemMutation = (
  { __typename?: 'Mutation' }
  & { createTodoItem?: Maybe<(
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id' | 'title' | 'description' | 'cost' | 'isCompleted'>
  )> }
);

export type TodoItemCreatedSubscriptionVariables = Exact<{
  todoListId: Scalars['String'];
}>;


export type TodoItemCreatedSubscription = (
  { __typename?: 'Subscription' }
  & { createTodoItem?: Maybe<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'title' | 'isLocked' | 'workspaceId'>
    & { todoItems: Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'id'>
    )> }
  )> }
);

export type GetTodoItemByIdQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTodoItemByIdQueryQuery = (
  { __typename?: 'Query' }
  & { todoItem?: Maybe<(
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id' | 'title' | 'description' | 'cost' | 'isCompleted'>
  )> }
);

export type DeleteTodoItemMutationVariables = Exact<{
  todoItemId: Scalars['String'];
  todoListId: Scalars['String'];
}>;


export type DeleteTodoItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteTodoItem?: Maybe<(
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id'>
  )> }
);

export type TodoItemDeletedSubscriptionVariables = Exact<{
  todoListId: Scalars['String'];
}>;


export type TodoItemDeletedSubscription = (
  { __typename?: 'Subscription' }
  & { deleteTodoItem?: Maybe<(
    { __typename?: 'TodoList' }
    & Pick<TodoList, 'id' | 'title' | 'isLocked' | 'workspaceId'>
    & { todoItems: Array<(
      { __typename?: 'TodoItem' }
      & Pick<TodoItem, 'id'>
    )> }
  )> }
);

export type UpdateTodoItemMutationVariables = Exact<{
  todoItemId: Scalars['String'];
  todoItemIsCompleted?: Maybe<Scalars['Boolean']>;
  todoItemTitle?: Maybe<Scalars['String']>;
  todoItemDescription?: Maybe<Scalars['String']>;
  todoItemCost?: Maybe<Scalars['Int']>;
}>;


export type UpdateTodoItemMutation = (
  { __typename?: 'Mutation' }
  & { updateTodoItem?: Maybe<(
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id' | 'title' | 'description' | 'cost' | 'isCompleted'>
  )> }
);

export type TodoItemUpdatedSubscriptionVariables = Exact<{
  id: Scalars['String'];
}>;


export type TodoItemUpdatedSubscription = (
  { __typename?: 'Subscription' }
  & { updateTodoItem?: Maybe<(
    { __typename?: 'TodoItem' }
    & Pick<TodoItem, 'id'>
  )> }
);


export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isShared"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"todoLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"todoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspaces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceTitle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isShared"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"todoLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"todoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"todoListId"}}]}}]}}]}}]}}]} as unknown as DocumentNode;
export type CreateWorkspaceMutationFn = Apollo.MutationFunction<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      workspaceTitle: // value for 'workspaceTitle'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(CreateWorkspaceDocument, options);
      }
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>;
export type CreateWorkspaceMutationResult = Apollo.MutationResult<CreateWorkspaceMutation>;
export type CreateWorkspaceMutationOptions = Apollo.BaseMutationOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>;
export const DeleteWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;
export type DeleteWorkspaceMutationFn = Apollo.MutationFunction<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;

/**
 * __useDeleteWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMutation, { data, loading, error }] = useDeleteWorkspaceMutation({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useDeleteWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>(DeleteWorkspaceDocument, options);
      }
export type DeleteWorkspaceMutationHookResult = ReturnType<typeof useDeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationResult = Apollo.MutationResult<DeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;
export const UpdateWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceIsShared"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isShared"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceIsShared"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceTitle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isShared"}}]}}]}}]} as unknown as DocumentNode;
export type UpdateWorkspaceMutationFn = Apollo.MutationFunction<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *      workspaceIsShared: // value for 'workspaceIsShared'
 *      workspaceTitle: // value for 'workspaceTitle'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>(UpdateWorkspaceDocument, options);
      }
export type UpdateWorkspaceMutationHookResult = ReturnType<typeof useUpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationResult = Apollo.MutationResult<UpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;
export const GetTodoListByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodoListById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todoList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"todoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"todoListId"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetTodoListByIdQuery__
 *
 * To run a query within a React component, call `useGetTodoListByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoListByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoListByIdQuery({
 *   variables: {
 *      todoListId: // value for 'todoListId'
 *   },
 * });
 */
export function useGetTodoListByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTodoListByIdQuery, GetTodoListByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoListByIdQuery, GetTodoListByIdQueryVariables>(GetTodoListByIdDocument, options);
      }
export function useGetTodoListByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoListByIdQuery, GetTodoListByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoListByIdQuery, GetTodoListByIdQueryVariables>(GetTodoListByIdDocument, options);
        }
export type GetTodoListByIdQueryHookResult = ReturnType<typeof useGetTodoListByIdQuery>;
export type GetTodoListByIdLazyQueryHookResult = ReturnType<typeof useGetTodoListByIdLazyQuery>;
export type GetTodoListByIdQueryResult = Apollo.QueryResult<GetTodoListByIdQuery, GetTodoListByIdQueryVariables>;
export const GetWorkspaceByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkspaceById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isShared"}},{"kind":"Field","name":{"kind":"Name","value":"ownerId"}},{"kind":"Field","name":{"kind":"Name","value":"todoLists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"todoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetWorkspaceByIdQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkspaceByIdQuery(baseOptions: Apollo.QueryHookOptions<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>(GetWorkspaceByIdDocument, options);
      }
export function useGetWorkspaceByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>(GetWorkspaceByIdDocument, options);
        }
export type GetWorkspaceByIdQueryHookResult = ReturnType<typeof useGetWorkspaceByIdQuery>;
export type GetWorkspaceByIdLazyQueryHookResult = ReturnType<typeof useGetWorkspaceByIdLazyQuery>;
export type GetWorkspaceByIdQueryResult = Apollo.QueryResult<GetWorkspaceByIdQuery, GetWorkspaceByIdQueryVariables>;
export const GetTodoListsByWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodoListsByWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todoLists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetTodoListsByWorkspaceQuery__
 *
 * To run a query within a React component, call `useGetTodoListsByWorkspaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoListsByWorkspaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoListsByWorkspaceQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useGetTodoListsByWorkspaceQuery(baseOptions: Apollo.QueryHookOptions<GetTodoListsByWorkspaceQuery, GetTodoListsByWorkspaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoListsByWorkspaceQuery, GetTodoListsByWorkspaceQueryVariables>(GetTodoListsByWorkspaceDocument, options);
      }
export function useGetTodoListsByWorkspaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoListsByWorkspaceQuery, GetTodoListsByWorkspaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoListsByWorkspaceQuery, GetTodoListsByWorkspaceQueryVariables>(GetTodoListsByWorkspaceDocument, options);
        }
export type GetTodoListsByWorkspaceQueryHookResult = ReturnType<typeof useGetTodoListsByWorkspaceQuery>;
export type GetTodoListsByWorkspaceLazyQueryHookResult = ReturnType<typeof useGetTodoListsByWorkspaceLazyQuery>;
export type GetTodoListsByWorkspaceQueryResult = Apollo.QueryResult<GetTodoListsByWorkspaceQuery, GetTodoListsByWorkspaceQueryVariables>;
export const CreateTodoListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTodoList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListWorkspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTodoList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListWorkspaceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListTitle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}}]}}]}}]} as unknown as DocumentNode;
export type CreateTodoListMutationFn = Apollo.MutationFunction<CreateTodoListMutation, CreateTodoListMutationVariables>;

/**
 * __useCreateTodoListMutation__
 *
 * To run a mutation, you first call `useCreateTodoListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoListMutation, { data, loading, error }] = useCreateTodoListMutation({
 *   variables: {
 *      todoListWorkspaceId: // value for 'todoListWorkspaceId'
 *      todoListTitle: // value for 'todoListTitle'
 *   },
 * });
 */
export function useCreateTodoListMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoListMutation, CreateTodoListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoListMutation, CreateTodoListMutationVariables>(CreateTodoListDocument, options);
      }
export type CreateTodoListMutationHookResult = ReturnType<typeof useCreateTodoListMutation>;
export type CreateTodoListMutationResult = Apollo.MutationResult<CreateTodoListMutation>;
export type CreateTodoListMutationOptions = Apollo.BaseMutationOptions<CreateTodoListMutation, CreateTodoListMutationVariables>;
export const TodoListCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TodoListCreated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTodoList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useTodoListCreatedSubscription__
 *
 * To run a query within a React component, call `useTodoListCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoListCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoListCreatedSubscription({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useTodoListCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<TodoListCreatedSubscription, TodoListCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TodoListCreatedSubscription, TodoListCreatedSubscriptionVariables>(TodoListCreatedDocument, options);
      }
export type TodoListCreatedSubscriptionHookResult = ReturnType<typeof useTodoListCreatedSubscription>;
export type TodoListCreatedSubscriptionResult = Apollo.SubscriptionResult<TodoListCreatedSubscription>;
export const DeleteTodoListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTodoList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTodoList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"todoListId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}}},{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;
export type DeleteTodoListMutationFn = Apollo.MutationFunction<DeleteTodoListMutation, DeleteTodoListMutationVariables>;

/**
 * __useDeleteTodoListMutation__
 *
 * To run a mutation, you first call `useDeleteTodoListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoListMutation, { data, loading, error }] = useDeleteTodoListMutation({
 *   variables: {
 *      todoListId: // value for 'todoListId'
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useDeleteTodoListMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoListMutation, DeleteTodoListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoListMutation, DeleteTodoListMutationVariables>(DeleteTodoListDocument, options);
      }
export type DeleteTodoListMutationHookResult = ReturnType<typeof useDeleteTodoListMutation>;
export type DeleteTodoListMutationResult = Apollo.MutationResult<DeleteTodoListMutation>;
export type DeleteTodoListMutationOptions = Apollo.BaseMutationOptions<DeleteTodoListMutation, DeleteTodoListMutationVariables>;
export const TodoListDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TodoListDeleted"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTodoList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspaceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspaceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useTodoListDeletedSubscription__
 *
 * To run a query within a React component, call `useTodoListDeletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoListDeletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoListDeletedSubscription({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useTodoListDeletedSubscription(baseOptions: Apollo.SubscriptionHookOptions<TodoListDeletedSubscription, TodoListDeletedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TodoListDeletedSubscription, TodoListDeletedSubscriptionVariables>(TodoListDeletedDocument, options);
      }
export type TodoListDeletedSubscriptionHookResult = ReturnType<typeof useTodoListDeletedSubscription>;
export type TodoListDeletedSubscriptionResult = Apollo.SubscriptionResult<TodoListDeletedSubscription>;
export const UpdateTodoListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTodoList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListIsLocked"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTodoList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isLocked"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListIsLocked"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListTitle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}}]}}]}}]} as unknown as DocumentNode;
export type UpdateTodoListMutationFn = Apollo.MutationFunction<UpdateTodoListMutation, UpdateTodoListMutationVariables>;

/**
 * __useUpdateTodoListMutation__
 *
 * To run a mutation, you first call `useUpdateTodoListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoListMutation, { data, loading, error }] = useUpdateTodoListMutation({
 *   variables: {
 *      todoListId: // value for 'todoListId'
 *      todoListIsLocked: // value for 'todoListIsLocked'
 *      todoListTitle: // value for 'todoListTitle'
 *   },
 * });
 */
export function useUpdateTodoListMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoListMutation, UpdateTodoListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoListMutation, UpdateTodoListMutationVariables>(UpdateTodoListDocument, options);
      }
export type UpdateTodoListMutationHookResult = ReturnType<typeof useUpdateTodoListMutation>;
export type UpdateTodoListMutationResult = Apollo.MutationResult<UpdateTodoListMutation>;
export type UpdateTodoListMutationOptions = Apollo.BaseMutationOptions<UpdateTodoListMutation, UpdateTodoListMutationVariables>;
export const TodoListUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TodoListUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTodoList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"todoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useTodoListUpdatedSubscription__
 *
 * To run a query within a React component, call `useTodoListUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoListUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoListUpdatedSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodoListUpdatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<TodoListUpdatedSubscription, TodoListUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TodoListUpdatedSubscription, TodoListUpdatedSubscriptionVariables>(TodoListUpdatedDocument, options);
      }
export type TodoListUpdatedSubscriptionHookResult = ReturnType<typeof useTodoListUpdatedSubscription>;
export type TodoListUpdatedSubscriptionResult = Apollo.SubscriptionResult<TodoListUpdatedSubscription>;
export const CreateTodoItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTodoItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemTitle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemTodoListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemDescription"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemCost"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTodoItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemTitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"todoListId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemTodoListId"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemDescription"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemCost"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode;
export type CreateTodoItemMutationFn = Apollo.MutationFunction<CreateTodoItemMutation, CreateTodoItemMutationVariables>;

/**
 * __useCreateTodoItemMutation__
 *
 * To run a mutation, you first call `useCreateTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoItemMutation, { data, loading, error }] = useCreateTodoItemMutation({
 *   variables: {
 *      todoItemTitle: // value for 'todoItemTitle'
 *      todoItemTodoListId: // value for 'todoItemTodoListId'
 *      todoItemDescription: // value for 'todoItemDescription'
 *      todoItemCost: // value for 'todoItemCost'
 *   },
 * });
 */
export function useCreateTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoItemMutation, CreateTodoItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoItemMutation, CreateTodoItemMutationVariables>(CreateTodoItemDocument, options);
      }
export type CreateTodoItemMutationHookResult = ReturnType<typeof useCreateTodoItemMutation>;
export type CreateTodoItemMutationResult = Apollo.MutationResult<CreateTodoItemMutation>;
export type CreateTodoItemMutationOptions = Apollo.BaseMutationOptions<CreateTodoItemMutation, CreateTodoItemMutationVariables>;
export const TodoItemCreatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TodoItemCreated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTodoItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"todoListId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"todoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useTodoItemCreatedSubscription__
 *
 * To run a query within a React component, call `useTodoItemCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoItemCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoItemCreatedSubscription({
 *   variables: {
 *      todoListId: // value for 'todoListId'
 *   },
 * });
 */
export function useTodoItemCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<TodoItemCreatedSubscription, TodoItemCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TodoItemCreatedSubscription, TodoItemCreatedSubscriptionVariables>(TodoItemCreatedDocument, options);
      }
export type TodoItemCreatedSubscriptionHookResult = ReturnType<typeof useTodoItemCreatedSubscription>;
export type TodoItemCreatedSubscriptionResult = Apollo.SubscriptionResult<TodoItemCreatedSubscription>;
export const GetTodoItemByIdQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTodoItemByIdQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todoItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useGetTodoItemByIdQueryQuery__
 *
 * To run a query within a React component, call `useGetTodoItemByIdQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoItemByIdQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoItemByIdQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTodoItemByIdQueryQuery(baseOptions: Apollo.QueryHookOptions<GetTodoItemByIdQueryQuery, GetTodoItemByIdQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoItemByIdQueryQuery, GetTodoItemByIdQueryQueryVariables>(GetTodoItemByIdQueryDocument, options);
      }
export function useGetTodoItemByIdQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoItemByIdQueryQuery, GetTodoItemByIdQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoItemByIdQueryQuery, GetTodoItemByIdQueryQueryVariables>(GetTodoItemByIdQueryDocument, options);
        }
export type GetTodoItemByIdQueryQueryHookResult = ReturnType<typeof useGetTodoItemByIdQueryQuery>;
export type GetTodoItemByIdQueryLazyQueryHookResult = ReturnType<typeof useGetTodoItemByIdQueryLazyQuery>;
export type GetTodoItemByIdQueryQueryResult = Apollo.QueryResult<GetTodoItemByIdQueryQuery, GetTodoItemByIdQueryQueryVariables>;
export const DeleteTodoItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTodoItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTodoItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemId"}}},{"kind":"Argument","name":{"kind":"Name","value":"todoListId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;
export type DeleteTodoItemMutationFn = Apollo.MutationFunction<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;

/**
 * __useDeleteTodoItemMutation__
 *
 * To run a mutation, you first call `useDeleteTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoItemMutation, { data, loading, error }] = useDeleteTodoItemMutation({
 *   variables: {
 *      todoItemId: // value for 'todoItemId'
 *      todoListId: // value for 'todoListId'
 *   },
 * });
 */
export function useDeleteTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>(DeleteTodoItemDocument, options);
      }
export type DeleteTodoItemMutationHookResult = ReturnType<typeof useDeleteTodoItemMutation>;
export type DeleteTodoItemMutationResult = Apollo.MutationResult<DeleteTodoItemMutation>;
export type DeleteTodoItemMutationOptions = Apollo.BaseMutationOptions<DeleteTodoItemMutation, DeleteTodoItemMutationVariables>;
export const TodoItemDeletedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TodoItemDeleted"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTodoItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"todoListId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoListId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isLocked"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"todoItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useTodoItemDeletedSubscription__
 *
 * To run a query within a React component, call `useTodoItemDeletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoItemDeletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoItemDeletedSubscription({
 *   variables: {
 *      todoListId: // value for 'todoListId'
 *   },
 * });
 */
export function useTodoItemDeletedSubscription(baseOptions: Apollo.SubscriptionHookOptions<TodoItemDeletedSubscription, TodoItemDeletedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TodoItemDeletedSubscription, TodoItemDeletedSubscriptionVariables>(TodoItemDeletedDocument, options);
      }
export type TodoItemDeletedSubscriptionHookResult = ReturnType<typeof useTodoItemDeletedSubscription>;
export type TodoItemDeletedSubscriptionResult = Apollo.SubscriptionResult<TodoItemDeletedSubscription>;
export const UpdateTodoItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTodoItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemIsCompleted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemTitle"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemDescription"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"todoItemCost"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTodoItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemId"}}},{"kind":"Argument","name":{"kind":"Name","value":"isCompleted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemIsCompleted"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemTitle"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemDescription"}}},{"kind":"Argument","name":{"kind":"Name","value":"cost"},"value":{"kind":"Variable","name":{"kind":"Name","value":"todoItemCost"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cost"}},{"kind":"Field","name":{"kind":"Name","value":"isCompleted"}}]}}]}}]} as unknown as DocumentNode;
export type UpdateTodoItemMutationFn = Apollo.MutationFunction<UpdateTodoItemMutation, UpdateTodoItemMutationVariables>;

/**
 * __useUpdateTodoItemMutation__
 *
 * To run a mutation, you first call `useUpdateTodoItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoItemMutation, { data, loading, error }] = useUpdateTodoItemMutation({
 *   variables: {
 *      todoItemId: // value for 'todoItemId'
 *      todoItemIsCompleted: // value for 'todoItemIsCompleted'
 *      todoItemTitle: // value for 'todoItemTitle'
 *      todoItemDescription: // value for 'todoItemDescription'
 *      todoItemCost: // value for 'todoItemCost'
 *   },
 * });
 */
export function useUpdateTodoItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoItemMutation, UpdateTodoItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoItemMutation, UpdateTodoItemMutationVariables>(UpdateTodoItemDocument, options);
      }
export type UpdateTodoItemMutationHookResult = ReturnType<typeof useUpdateTodoItemMutation>;
export type UpdateTodoItemMutationResult = Apollo.MutationResult<UpdateTodoItemMutation>;
export type UpdateTodoItemMutationOptions = Apollo.BaseMutationOptions<UpdateTodoItemMutation, UpdateTodoItemMutationVariables>;
export const TodoItemUpdatedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TodoItemUpdated"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTodoItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useTodoItemUpdatedSubscription__
 *
 * To run a query within a React component, call `useTodoItemUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTodoItemUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoItemUpdatedSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodoItemUpdatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<TodoItemUpdatedSubscription, TodoItemUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TodoItemUpdatedSubscription, TodoItemUpdatedSubscriptionVariables>(TodoItemUpdatedDocument, options);
      }
export type TodoItemUpdatedSubscriptionHookResult = ReturnType<typeof useTodoItemUpdatedSubscription>;
export type TodoItemUpdatedSubscriptionResult = Apollo.SubscriptionResult<TodoItemUpdatedSubscription>;
export const namedOperations = {
  Query: {
    GetUser: 'GetUser',
    GetUsers: 'GetUsers',
    GetTodoListById: 'GetTodoListById',
    GetWorkspaceById: 'GetWorkspaceById',
    GetTodoListsByWorkspace: 'GetTodoListsByWorkspace',
    GetTodoItemByIdQuery: 'GetTodoItemByIdQuery'
  },
  Mutation: {
    CreateUser: 'CreateUser',
    CreateWorkspace: 'CreateWorkspace',
    DeleteWorkspace: 'DeleteWorkspace',
    UpdateWorkspace: 'UpdateWorkspace',
    CreateTodoList: 'CreateTodoList',
    DeleteTodoList: 'DeleteTodoList',
    UpdateTodoList: 'UpdateTodoList',
    CreateTodoItem: 'CreateTodoItem',
    DeleteTodoItem: 'DeleteTodoItem',
    UpdateTodoItem: 'UpdateTodoItem'
  },
  Subscription: {
    TodoListCreated: 'TodoListCreated',
    TodoListDeleted: 'TodoListDeleted',
    TodoListUpdated: 'TodoListUpdated',
    TodoItemCreated: 'TodoItemCreated',
    TodoItemDeleted: 'TodoItemDeleted',
    TodoItemUpdated: 'TodoItemUpdated'
  }
}