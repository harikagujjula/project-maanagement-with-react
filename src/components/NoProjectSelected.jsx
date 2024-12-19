import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

// Component to show when no Project is added or Selected.
export default function NoProjectSelected({ onStartAddProject }) {
  return <div className="text-center w-2/3 mt-24">
    <img src={noProjectImage} alt="An empty Task list" className="w-16 h-16 object-contain mx-auto"/>
    <h2 className="text-xl font-bold text-stone-500 my-4">No Project selected</h2>
    <p className="text-stone-400 mb-4">
      Select a Project or get started with a new project.
    </p>
    <p className="mt-8">
      <Button onClick={onStartAddProject}>
        Create new Project
      </Button>
    </p>
  </div>
}