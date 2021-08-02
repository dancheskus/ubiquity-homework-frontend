import {
  UpdateTodoItemMutationVariables,
  useCreateTodoItemMutation,
  useDeleteTodoItemMutation,
  useGetTodoListByIdLazyQuery,
  useUpdateTodoItemMutation,
} from 'generated/graphql'
import { PartialTodoItem } from 'components/types'
import TempButton from 'TempButton'

import {
  TodoItemWrapper,
  TodoItem,
  TodoItemHeader,
  TodoItemTitle,
  TodoItemDescription,
  Divider,
  TodoItemCompletedToggle,
  TodoItemActions,
  TodoItemActionButton,
} from './style'

export default function TodoList({ todoItems, todoListId }: { todoItems: PartialTodoItem[]; todoListId: string }) {
  const [refetchTodoList, {}] = useGetTodoListByIdLazyQuery({ variables: { todoListId }, fetchPolicy: 'network-only' })
  const [updateTodoMutation] = useUpdateTodoItemMutation()
  const [deleteTodoMutation] = useDeleteTodoItemMutation({ onCompleted: () => refetchTodoList() })
  const [createTodoItemMutation] = useCreateTodoItemMutation({ onCompleted: () => refetchTodoList() })

  return (
    <TodoItemWrapper>
      {todoItems.map(({ id, title, description, isCompleted }) => {
        const updateTodo = (variables: Omit<UpdateTodoItemMutationVariables, 'todoItemId'>) => {
          updateTodoMutation({ variables: { todoItemId: id, ...variables } })
        }

        return (
          <TodoItem key={id}>
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
              <TodoItemActionButton
                onClick={() => updateTodo({ todoItemDescription: description !== null ? null : '' })}
              >
                {description !== null ? 'Remove description' : 'Add description'}
              </TodoItemActionButton>

              <TodoItemActionButton onClick={() => deleteTodoMutation({ variables: { todoItemId: id } })}>
                Remove TODO
              </TodoItemActionButton>
            </TodoItemActions>
          </TodoItem>
        )
      })}

      <TempButton
        buttonName='Add todo item'
        onClick={() => {
          const itemName = prompt('Enter item name')
          const itemDescription = prompt('Enter item description')

          createTodoItemMutation({
            variables: {
              todoItemTodoListId: todoListId,
              todoItemTitle: itemName || '',
              todoItemDescription: itemDescription,
            },
          })
        }}
      />
    </TodoItemWrapper>
  )
}
