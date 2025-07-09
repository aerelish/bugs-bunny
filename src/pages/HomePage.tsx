import SearchBar from "@/components/SearchBar"
import OverviewSection from "@/components/sections/OverviewSection"
import RecentActivitySection from "@/components/sections/RecentActivitySection"
import ProjectSection from "@/components/sections/ProjectSection"

function HomePage() {
  return (
    <>
      <SearchBar />
      <div>
        <OverviewSection />
        <RecentActivitySection />
        <ProjectSection />
      </div>
    </>
  )
}

export default HomePage