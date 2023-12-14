import './App.scss'
import FilterButtons from './components/FilterButtons/FilterButtons'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className='app'>
      <TodoForm />
      <FilterButtons />
      <TodoList />
    </div>
  )
}

export default App
