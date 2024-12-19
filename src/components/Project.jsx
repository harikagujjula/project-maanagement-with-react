// Project add component.
import { useRef } from "react";
import Input from "./Input";

export default function Project({ onSaveProject }) {
  // Using Refs to keep track of input values as they have to be stored on click
  // of save. And not using State to manage these as there is no direct impact on UI when input changes.
  const titileRef = useRef();
  const descRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titileRef.current.value;
    const enteredDesc= descRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // Validation.

    // Save.
    // On save, the project data is to be saved and passed to sidebar component to display the project.
    onSaveProject({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate
    });
  }
  return (
    // To add a custom value with Tailwind, include the value in [] and the 
    //  class will be generated by Tailwind automatically.
    <div className="w-[35rem] mt-16">
      {/* Action menu */}
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
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
  );
}