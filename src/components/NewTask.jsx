import { useState } from "react"

export default function NewTask({ onAdd }) {
  // Props drilling - All the props here should be passed all through from the App > SelectedProject > Tasks > NewTask.
  // Using state to track the tasks added as the DOM should be updated each time task is added.
  // The input should be shown empty and the task list should be updated with newly added task.
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    // Forwarding enteredTask values to the App component.
    onAdd(enteredTask);
    // Setting the input with empty string after saving a task.
    setEnteredTask('');
  }

  return <div className="flex items-center justify-between">
    <input 
    type="text" 
    className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
    onChange={handleChange} 
    value={enteredTask}/>
    <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
  </div>
}