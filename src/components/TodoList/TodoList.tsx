import { useAppSelector } from '../../redux/store'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'

const TodoList = () => {
  const todos = useAppSelector((state) => state.slice.todos)
  const fltrTodos = useAppSelector(state => state.slice.filteredTodos)
  const isFiltered = useAppSelector(state => state.slice.isFiltered)
  
  return (
    <div className={styles.app}>
      {
        isFiltered ? 
        fltrTodos.map((item) => (
        <TodoItem key={item.id} id={item.id} title={item.title} 
        description={item.description} status={item.status}
        />
      )) :
        todos.map((item) => (
          <TodoItem key={item.id} id={item.id} title={item.title} 
          description={item.description} status={item.status}
          />
        ))
      }

    </div>
  )
}

export default TodoList