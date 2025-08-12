import { useEffect } from "react";
import { UseMainContext } from "@/context/MainContext";
import getProjects from '@/services/project/getProjects';
import SideBarSection from "@/components/sections/SideBarSection";
import DisplaySection from "@/components/sections/DisplaySection";

function ProjectPage() {

  const {
    projects,
    setProjects,
    selectedProject,
    setSelectedProject
  } = UseMainContext();

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
      <>
        <SideBarSection
          className="flex-1/5 h-full py-4 border-r-1 border-border-dark"
          header="Projects"
          listItems={projects}
          selectedItem={selectedProject}
          setSelectedItem={setSelectedProject}
        />
      </>
      <>
        <DisplaySection
          className="flex-4/5"
          header={selectedProject?.name}
        />
      </>
    </div>
  )
}

export default ProjectPage