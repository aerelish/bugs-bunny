import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { type Project } from '@/lib/types';
import getProjects from '@/services/project/getProjects';

function ProjectPage() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {

    const fetchData = async () => {
      const response = await getProjects();
      if (response.success) {
        setProjects(response.data || []);
        if (response.data && response.data.length > 0) {
          setSelectedProject(response.data[0]); // set the first project as selected by default
        }
      } else {
        console.error(response.error || 'Failed to fetch projects...');
      };
    };

    fetchData();

  }, []);

  return (
    <div className="h-full flex w-full">

      {/* Sidebar Section */}
      <div className="flex-1/5 border-r-1 border-border-dark py-4 h-full">

        {/* Header */}
        <div className="flex justify-between items-center px-8">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <button className="btn btn-circle">
            <Plus strokeWidth={2.5} />
          </button>
        </div>

        {/* Project List */}
        <div className='mt-4'>
          {projects ? (
            <ul className="text-lg ml-2">
              {projects.map((project) => (

                <li
                  key={project.id}
                  className={`py-2 px-6 cursor-pointer hover:text-base-300 hover:bg-primary rounded-l-4xl ${selectedProject?.id === project.id && "border-r-4 border-primary"}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedProject(project);
                  }}>
                  {project.name}
                </li>

              ))}
            </ul>
          ) : (
            <p className="mt-4">Loading projects...</p>
          )}
        </div>

      </div>

      {/* Display Section */}
      {selectedProject ? (
        <div className="flex-4/5">
          <h1 className="text-4xl font-semibold p-4 items-center">{selectedProject.name}</h1>
          <div
            role="tablist"
            className="w-full tabs tabs-border border-b-1 border-border-dark pt-1 px-1"
          >
            <a role="tab" className="tab">Overview</a>
            <a role="tab" className="tab tab-active text-primary border-primary hover:text-primary hover:border-primary">Board</a>
            <a role="tab" className="tab">Bugs</a>
            <a role="tab" className="tab">Tasks</a>
          </div>
        </div>
      ) : (
        <div className="flex-4/5 flex items-center justify-center">
          <p className="text-lg">Create New Project</p>
        </div>
      )}

    </div>
  )
}

export default ProjectPage

