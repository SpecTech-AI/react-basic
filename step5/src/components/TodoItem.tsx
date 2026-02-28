import type { Todo } from '../types/todo'
import './TodoItem.css'

type Props = {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="todo-item">
      <label className={`todo-label ${todo.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button className="todo-delete" onClick={() => onDelete(todo.id)}>
        削除
      </button>
    </li>
  )
}

export default TodoItem
