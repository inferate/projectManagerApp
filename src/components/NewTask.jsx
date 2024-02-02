import {useState} from 'react'

function NewTask({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('')
  const isNotValidTask = enteredTask.trim() === ''
  const handleChange = (e) => {
    setEnteredTask(e.target.value)
  }
  function handleClick() {
    if (!isNotValidTask) {
      onAdd(enteredTask)
      setEnteredTask('')
    }
    //test commit
  }
  return (
    <div className='flex items-center gap-4'>
      <input
        value={enteredTask}
        type='text'
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className='text-stone-700 hover:text-stone-950'
      >
        Add Task
      </button>
    </div>
  )
}

export default NewTask
