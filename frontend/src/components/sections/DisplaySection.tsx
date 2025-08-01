import { useEffect, useState } from 'react';
import { type Project } from '@/lib/types';
import getProjects from '@/services/project/getProjects';

function DisplaySection() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [, setProjects] = useState<Project[] | null>(null);

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
    <>
      {/* Display Section */}
      {selectedProject ? (
        <div className="flex-4/5">
          <h1 className="text-4xl font-semibold p-4 items-center">{selectedProject.name}</h1>
          <div
            role="tablist"
            className="w-full tabs tabs-border border-b border-border-dark pt-1"
          >
            <a role="tab" className="tab tab-active">Overview</a>
            <a role="tab" className="tab">Board</a>
            <a role="tab" className="tab">Bugs</a>
            <a role="tab" className="tab">Tasks</a>
          </div>
        </div>
      ) : (
        <div className="flex-4/5 flex items-center justify-center">
          <p className="text-lg">Create New Project</p>
        </div>
      )}
    </>
  )
}

export default DisplaySection