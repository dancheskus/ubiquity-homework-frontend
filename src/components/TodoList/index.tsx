import {
  UpdateTodoItemMutationVariables,
  useDeleteTodoItemMutation,
  useGetTodoListByIdLazyQuery,
  useUpdateTodoItemMutation,
} from 'generated/graphql'
import { PartialTodoItem } from 'components/types'

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
  const [refetchTodoList] = useGetTodoListByIdLazyQuery({ variables: { todoListId } })
  const [updateTodoMutation] = useUpdateTodoItemMutation()
  const [deleteTodoMutation] = useDeleteTodoItemMutation({ onCompleted: () => refetchTodoList() })

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
    </TodoItemWrapper>
  )
}
