import styles from './TodoInputs.module.scss'

interface IProps {
    title: string,
    description: string,
    setTitle: (title: string) => void,
    setDescription: (description: string) => void
}

const TodoInputs = ({title, description, setTitle, setDescription}: IProps) => {
  return (
    <div className={styles.app}>
    <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
    <input type="text" placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
    <button type='submit'>Add</button>
    </div>
  )
}

export default TodoInputs