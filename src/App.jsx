import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  // Using state to determine if we should show NoProjectSelected component or Project component to add new one with:
  // selectedProject stores the id of the proj selected or undefined if we are not adding/select any project.
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  // Function that starts Adding project i.e shows add project screen.
  function handleStartAddProject() {
    // selectedProjectId: null ==> we are adding a project.
    // selectedProjectId: undefined ==> we did not select anything.
    setProjectState(prevState => {
      return {
        // preserving prevState object properties and overriding selectedProjectId.
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Function that saves the project data.
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      // Using random id for new projects.
      id: Math.random()
    }
    setProjectState(prevState => {
      return {
        // Saving prevState object properties and overriding/updating the projects array with new Project data added.
        ...prevState,
        // Setting the selectedProjectId to undefined, so that on click of save, the Project Add screen goes away.
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject], 
      };
    });
  }

  // Fucntion to call on click of Cancel on Add project screen.
  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        // preserving prevState object properties and overriding selectedProjectId.
        ...prevState,
        // Updating the selectedProjectId to undefined so that NoProjectsSelected will be shown.
        selectedProjectId: undefined,
      };
    });
  }

  // Function to call on click of a Project on sidebar to show Project details.
  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        // preserving prevState object properties and overriding selectedProjectId.
        ...prevState,
        // Updating the selectedProjectId to id of the project selected.
        selectedProjectId: id,
      };
    });
  }

  // Function to Delete a project that shows on SelectedProject.
  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        // preserving prevState object properties and overriding selectedProjectId.
        ...prevState,
        // Updating the selectedProjectId to to undefined so that the project we
        // are about to delete is no longer selected.
        selectedProjectId: undefined,
        // Update projects array using filter, by removing the project id that is previously selected.
        // if false is returned, item will be dropped and true will keep the item in the array.
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  // Deriving the project data to pass to SelectProject from the id present in state.
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  // Setting the default to SelectedProject component.
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;
  if (projectState.selectedProjectId === null) {
    content = <Project onSaveProject={handleAddProject} onCancelAdd={handleCancelAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* Adding handleStartAddProject to both buttons in Sidebar and NoProjectSelected. */}
      {/* Passing the projects object to the sidebar to show all those added. */}
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject}/>
      {/* Show the Project component only when clicked on Add Project, if not show NoProjectSelected. */}
      { content }
    </main>
  );
}

export default App;
