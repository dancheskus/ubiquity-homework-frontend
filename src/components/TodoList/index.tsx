import {
  useCreateTodoItemMutation,
  useGetTodoListByIdLazyQuery,
  useTodoListUpdatedSubscription,
} from 'generated/graphql'
import { PartialTodoItem } from 'components/types'
import Button from 'style/Button'
import TodoItem from 'components/TodoItem'

import { TodoItemWrapper } from './style'

interface Props {
  todoItems: PartialTodoItem[]
  todoListId: string
}

export default function TodoList({ todoItems, todoListId }: Props) {
  const [refetchTodoList] = useGetTodoListByIdLazyQuery({ variables: { todoListId }, fetchPolicy: 'network-only' })
  const [createTodoItemMutation] = useCreateTodoItemMutation()
  useTodoListUpdatedSubscription({ variables: { id: todoListId }, onSubscriptionData: () => refetchTodoList() })

  return (
    <TodoItemWrapper>
      {todoItems.map(todoItem => (
        <TodoItem todoListId={todoListId} todoItem={todoItem} key={todoItem.id} />
      ))}

      <Button
        onClick={() => {
          const itemName = prompt('Enter item name')

          createTodoItemMutation({
            variables: {
              todoItemTodoListId: todoListId,
              todoItemTitle: itemName || '',
            },
          })
        }}
      >
        Add todo item
      </Button>
    </TodoItemWrapper>
  )
}
