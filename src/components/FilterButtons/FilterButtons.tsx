import { filteredTodos, setFiltered } from "../../redux/slice"
import { useAppDispatch } from "../../redux/store"
import styles from './FilterButtons.module.scss'

const FilterButtons = () => {
    const dispatch = useAppDispatch()

    const handleClick =(status: boolean | null) => {
        dispatch(filteredTodos(status))
        dispatch(setFiltered())
    }

  return (
    <div className={styles.app}>
        <button onClick={() => handleClick(true)}>Complete</button>
        <button onClick={() => handleClick(null)}>In Progress</button>
        <button onClick={() => handleClick(false)}>Pending</button>
      </div>
  )
}

export default FilterButtons