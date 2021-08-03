import {
  TodoItem as TodoItemType,
  UpdateTodoItemMutationVariables,
  useDeleteTodoItemMutation,
  useGetTodoItemByIdQueryLazyQuery,
  useGetTodoListByIdLazyQuery,
  useTodoItemDeletedSubscription,
  useTodoItemUpdatedSubscription,
  useUpdateTodoItemMutation,
} from 'generated/graphql'

import {
  TodoItemStyle,
  TodoItemHeader,
  TodoItemTitle,
  TodoItemDescription,
  Divider,
  TodoItemCompletedToggle,
  TodoItemActions,
  TodoItemActionButton,
} from './style'

interface Props {
  todoListId: string
  todoItem: Omit<TodoItemType, 'todoListId'>
}

export default function TodoItem({ todoListId, todoItem }: Props) {
  const { id, title, description, isCompleted } = todoItem
  const [refetchTodoList] = useGetTodoListByIdLazyQuery({ variables: { todoListId }, fetchPolicy: 'network-only' })
  const [updateTodoItemMutation] = useUpdateTodoItemMutation()
  const [refetchTodoItem] = useGetTodoItemByIdQueryLazyQuery({ variables: { id }, fetchPolicy: 'network-only' })
  const [deleteTodoItemMutation] = useDeleteTodoItemMutation({ onCompleted: () => refetchTodoList() })
  useTodoItemUpdatedSubscription({ variables: { id }, onSubscriptionData: () => refetchTodoItem() })
  useTodoItemDeletedSubscription({ variables: { todoListId }, onSubscriptionData: () => refetchTodoList() })

  const updateTodo = (variables: Omit<UpdateTodoItemMutationVariables, 'todoItemId'>) => {
    updateTodoItemMutation({ variables: { todoItemId: id, ...variables } })
  }

  return (
    <TodoItemStyle key={id}>
      <TodoItemHeader>
        <TodoItemTitle value={title} onChange={({ target: { value } }) => updateTodo({ todoItemTitle: value })} />

        <TodoItemCompletedToggle
          onClick={() => updateTodo({ todoItemIsCompleted: !isCompleted })}
          isChecked={isCompleted}
        />
      </TodoItemHeader>

      {description !== null && (
        <>
          <Divider />

          <TodoItemDescription
            placeholder='Enter description here'
            value={description}
            onChange={({ target: { value } }) => updateTodo({ todoItemDescription: value })}
          />
        </>
      )}

      <TodoItemActions>
        <TodoItemActionButton onClick={() => updateTodo({ todoItemDescription: description !== null ? null : '' })}>
          {description !== null ? 'Remove description' : 'Add description'}
        </TodoItemActionButton>

        <TodoItemActionButton onClick={() => deleteTodoItemMutation({ variables: { todoItemId: id, todoListId } })}>
          Remove TODO
        </TodoItemActionButton>
      </TodoItemActions>
    </TodoItemStyle>
  )
}
