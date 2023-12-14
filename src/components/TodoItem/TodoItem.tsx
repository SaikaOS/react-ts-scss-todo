import {Todo, toggleStatus} from '../../redux/slice'
import styles from './TodoItem.module.scss'
import { useAppDispatch } from '../../redux/store'

const TodoItem = ({id, title, description, status}: Todo) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    switch (status) {
      case true:
        dispatch(toggleStatus({id: id, status: false}));
        break;
      case false:
        dispatch(toggleStatus({id: id, status: null}));
        break;
      default:
        dispatch(toggleStatus({id: id, status: true}));
        break;
    }
  }

  return (
    <div className={styles.app}>
          <p>{title}</p>
          <p>{description}</p>
          <div>
          {status === null && <label>In progress</label>}
          {status === true && <label>Complete</label>}
          {status === false && <label>Pending</label>}
          <input
      type="checkbox"
      checked={status === true}
      onChange={handleClick}
    />
          </div>
        </div>
  )
}

export default TodoItem