import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
    <div>
      <Button onClick={onStartAddProject}>
        + Add Project
      </Button>
    </div>
    <div>
      {/* List of projects */}
      <ul className="mt-8">
        {/* When we are using map() like this, the root item (here li) should 
        receive key prop with unique identifier. */}
        {projects.map(project => {
            // Highlighting using extra classes if current project is the selected project.
            let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
            if (project.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200"
            }
            else {
              cssClasses += " textstone-400";
            }
            return (
              <li key={project.id}>
                {/* Selectable project */}
                <button className={cssClasses} 
                onClick={() => onSelectProject(project.id)}>
                  {project.title}
                </button>
              </li>
            );
          }
        )}
      </ul>
    </div>
  </aside>
}