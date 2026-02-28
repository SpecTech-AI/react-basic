import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import useLocalStorage from './hooks/useLocalStorage'
import type { Todo, Filter } from './types/todo'

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])
  const [filter, setFilter] = useState<Filter>('all')

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="app">
      <h1>Todo アプリ（永続化版）</h1>
      <p className="description">ブラウザを閉じてもデータが残ります</p>
      <TodoForm onAdd={addTodo} />
      <TodoFilter current={filter} onChange={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}

export default App
