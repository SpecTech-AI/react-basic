import { useState } from 'react'
import './TodoForm.css'

type Props = {
  onAdd: (text: string) => void
}

function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === '') return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいタスクを入力..."
      />
      <button type="submit">追加</button>
    </form>
  )
}

export default TodoForm
