# Project Management task(with TailwindCSS)

## Overview of the component structure
* Sidebar
  * Title
  * Add Project button
  * List of created Projects
* Main content
  * Add project should show/replace the content in the Man content section with a form
    * Title
    * Description
    * Due date
    * Cancel and Save buttons(Should show the Project details & Tasks section)
  * Project details section with:
    * Project Title (selected)
    * Delete button to delete the project
    * Due Date, Description and other props
  * Tasks Section
    * Input to add task and a button to save
    * List of Tasks created with clear button for each


## Concepts used
* State Management
* Ref 
  * Using forwardRef that supports React < 19
  * Without using forwardRef to support for React > 19
* StrictMode
  * Ensures a component to run twice(only in development mode)
  * Allows to identify potential problems at development stages like deprecated 
  API usuage, execution of unsafe life cycles etc
* Props Drilling
  * Passing the props through multiple components
  * For example, To handle Add task, delete tasks, we are passing the handleAddTask, handleDeleteTask all the way from App > SelectedProject > Tasks > NewTask
* Using Tailwind
  Notes:
  * Customize Tailwind classes using []. Ex: w-[35rem]
  * To allow linebreaks in a text area, use whitespace-pre-wrap
