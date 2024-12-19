// Project add component.
import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function Project({ onSaveProject, onCancelAdd }) {
  // Adding a ref to the Modal component.
  const modal = useRef();
  // Using Refs to keep track of input values as they have to be stored on click
  // of save. And not using State to manage these as there is no direct impact on UI when input changes.
  const titileRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titileRef.current.value;
    const enteredDesc= descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // Basic Validation.
    if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === '') {
      // Show a modal with custom Modal component by calling the function exposed.
      modal.current.open();
      // Returning so that the next code is never executed if validation modal shows up.
      return;
    }

    // Save.
    // On save, the project data is to be saved and should be passed to sidebar 
    // component to display the project. So collecting the input data and 
    // passing to the App component so that the same data can be passed to the Sidebar component.
    onSaveProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate
    });
  }
  return (
      // To add a custom value with Tailwind, include the value in [] and the 
      //  class will be generated by Tailwind automatically.
      <>
      {/* Including the Modal component to show validation messages, if any. */}
      <Modal ref={modal} buttonCaption="Ok"> 
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops.. Looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure a valid value for every Input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        {/* Action menu */}
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancelAdd}>Cancel</button></li>
          <li>
            <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        {/* Project add form using div rather than form for now. */}
        <div>
          <Input type="text" label="Title" ref={titileRef}/>
          <Input label="Description" textarea="true" ref={descRef}/>
          <Input type="date" label="Due Date" ref={dueDateRef}/>
        </div>
      </div>
    </>
  );
}