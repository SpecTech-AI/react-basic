import type { Todo } from '../types/todo'
import TodoItem from './TodoItem'
import './TodoList.css'

type Props = {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TodoList({ todos, onToggle, onDelete }: Props) {
  if (todos.length === 0) {
    return <p className="todo-empty">タスクがありません。</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
