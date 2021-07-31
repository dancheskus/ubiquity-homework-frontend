import { gql } from '@apollo/client';
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
  createTodoList?: Maybe<TodoList>;
  createUser?: Maybe<User>;
  createWorkspace?: Maybe<Workspace>;
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
};


export type MutationDeleteTodoListArgs = {
  id: Scalars['String'];
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
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryUserArgs = {
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
  todoItems: Array<Maybe<TodoItem>>;
  workspaceId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
};

export type Workspace = {
  __typename?: 'Workspace';
  id: Scalars['String'];
  isShared: Scalars['Boolean'];
  ownerId: Scalars['String'];
  title: Scalars['String'];
  todoLists: Array<Maybe<TodoList>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);


export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
  }
}
    `;

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