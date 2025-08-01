import SideBarSection from "@/components/sections/SideBarSection";
import DisplaySection from "@/components/sections/DisplaySection";

function ProjectPage() {
  return (
    <div className="h-full w-full flex">
      <div className="flex-1/5">
        <SideBarSection />
      </div>
      <div className="flex-4/5">
        <DisplaySection />
      </div>
    </div>
  )
}

export default ProjectPage