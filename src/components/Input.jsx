// Input component with Label and input/textarea.
import { forwardRef } from "react";

// Note: Making use of Forward ref even though ref is supported with React > 19.
const Input = forwardRef(function Input({ label, isTextArea, ...props }, ref) {
  const classes="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      { isTextArea ?
       <textarea {...props} className={classes} ref={ref} /> :
       <input type="text" {...props} className={classes} ref={ref} />}
    </p>
  );
});

export default Input;