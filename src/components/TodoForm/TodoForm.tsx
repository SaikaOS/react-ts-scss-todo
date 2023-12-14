import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/store'
import { addTodo } from '../../redux/slice'
import TotalCompletedItems from '../TotalCompletedItems/TotalCompletedItems'
import TodoInputs from './TodoInputs/TodoInputs'

const TodoForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault()
    if(title.length != 0 && title.length <= 30) {
      dispatch(addTodo({
        title: title,
        description: description,
        status: null,
      }))
    } else {
      alert("Write your title max 30 symbols")
    }
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Todo App</h1>
      <TotalCompletedItems />
      <TodoInputs title={title} description={description} setTitle={setTitle} setDescription={setDescription}/>
    </form>
  )
}

export default TodoForm