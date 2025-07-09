import SectionLayout from "@/components/layouts/SectionLayout"
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// mock data
import { projectsData, Project } from "@/data/ProjectsData"

function ProjectSection() {

  const projects = projectsData;

  return (
    <SectionLayout title="projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {projects.map((project: Project) => {
          return (
            <Card className="rounded-lg">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                {/* <CardAction>Card Action</CardAction> */}
              </CardHeader>
              <CardContent>

              </CardContent>
            </Card>
          )
        })}
      </div>
    </SectionLayout>
  )
}

export default ProjectSection