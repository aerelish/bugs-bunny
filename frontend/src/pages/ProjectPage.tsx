import { useEffect } from "react";
import cn from '@/utils/cn';
import { UseMainContext } from "@/context/MainContext";
import getProjects from '@/services/project/getProjects';

function ProjectPage() {

  const {
    projects,
    setProjects,
    selectedProject,
    setSelectedProject
  } = UseMainContext();

  // ? can I move this to the MainContext instead?
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

  if (!selectedProject) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <p className="text-lg">Create New Project</p>
      </div>
    )
  }

  return (
    <div className="h-full w-full flex">

      <div className="">

        <h1 className='pb-2 tracking-widest text-gray-500'>FAVORITES</h1>

        {projects ?
          (
            <ul>
              {projects.map((project) => (
                <li
                  key={project.id}
                  className={cn("py-2 px-4 cursor-pointer rounded-sm hover:text-white hover:bg-primary ", project?.id === project.id && "font-bold")}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedProject(project);
                  }}>
                  {project.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4">Loading...</p>
          )
        }

      </div>

      <div className="">

        <h1 className="text-4xl font-semibold p-4 items-center">{selectedProject.name}</h1>

      </div>

      {/* <>
        <SideBarSection
          className="flex-1/5 h-full py-4 border-r-1 border-border-dark"
          header="Projects"
          listItems={projects}
          selectedItem={selectedProject}
          setSelectedItem={setSelectedProject}
          quickAdd={() => navigate('/project/new')}
        />
      </>
      <>
        <DisplaySection
          className="flex-4/5"
          header={selectedProject?.name}
        />
      </> */}

    </div>
  )
}

export default ProjectPage