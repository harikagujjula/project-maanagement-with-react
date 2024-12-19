// Using Portal to render the dialog in a different place in DOM.
import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Button from "./Button";

// Using ref & useImperativeHandle to make more flexible and reusable, we
//  can open the dialog by calling a function that should be exposed by this 
// custom component and so does not require calling of the component. So if any 
// component is using the Modal component, the dialog open and close can be called explicitly.
export default function Modal({ children, buttonCaption, ref }) {
  const dialog = useRef();

  // useImperativeHandle allows 2 arguments: ref and function that will be 
  // called by React where we return an object that exposes any properties or 
  // functions you want to expose to other components.
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close () {
        dialog.current.hideModal();
      }
    }
  });
  return createPortal(
    // Can style anything in the backdrop when a modal is open using backdrop class with Tailwind.
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shawdow-md">
      {children}
      <form method="dailog" className="mt-4 text-right ">
        <Button>{buttonCaption}</Button>
      </form>
      </dialog>,
    document.getElementById("modal-root")
  );
}