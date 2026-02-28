import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import useTodos from './hooks/useTodos'
import type { Filter } from './types/todo'

function App() {
  const { todos, isLoading, error, addTodo, toggleTodo, deleteTodo } = useTodos()
  const [filter, setFilter] = useState<Filter>('all')

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="app">
      <h1>Todo アプリ（API連携版）</h1>
      <p className="description">データをAPIから取得します</p>
      <TodoForm onAdd={addTodo} />
      <TodoFilter current={filter} onChange={setFilter} />
      {isLoading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      )}
    </div>
  )
}

export default App
