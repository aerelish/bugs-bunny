import { useState, useEffect } from "react";
import { type Project } from '@/lib/types';
import getProjects from '@/services/project/getProjects';
import SideBarSection from "@/components/sections/SideBarSection";
import DisplaySection from "@/components/sections/DisplaySection";

function ProjectPage() {

  const [projects, setProjects] = useState<Project[] | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <div className="h-full w-full flex">
      <>
        <SideBarSection
          className="flex-1/5 h-full py-4 border-r-1 border-border-dark"
          header={selectedProject?.name}
          listItems={projects}
          selectedItem={selectedProject}
          setSelectedItem={setSelectedProject}
        />
      </>
      <>
        <DisplaySection
          className="flex-4/5"
          header={selectedProject?.name}
          selectedItem={selectedProject}
        />
      </>
    </div>
  )
}

export default ProjectPage