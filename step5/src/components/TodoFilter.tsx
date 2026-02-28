import type { Filter } from '../types/todo'
import './TodoFilter.css'

type Props = {
  current: Filter
  onChange: (filter: Filter) => void
}

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了済み' },
]

function TodoFilter({ current, onChange }: Props) {
  return (
    <div className="todo-filter">
      {filters.map((f) => (
        <button
          key={f.value}
          className={current === f.value ? 'active' : ''}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
