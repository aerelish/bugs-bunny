import HomeLayout from "@/components/layouts/HomeLayout"
import OverviewAndRActivitySection from "@/components/sections/OverviewAndRActivitySection"
import ProjectSection from "@/components/sections/ProjectSection"

function HomePage() {
  return (
    <>
      <HomeLayout 
        leftCol = {
          <OverviewAndRActivitySection />
        }
        rightCol = {
          <ProjectSection />
        }
      />
    </>
  )
}

export default HomePage