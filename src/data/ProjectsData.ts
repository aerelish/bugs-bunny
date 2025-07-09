export type Project = {
  id: number
  name: string
  description: string
  stack: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "BugsBunny",
    description: "A minimal bug tracker with a rabbit twist. Track, squash, and hop through bugs with ease.",
    stack: ["React", "Tailwind", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/bugsbunny",
    liveUrl: "https://bugsbunny.vercel.app",
    image: "/images/bugsbunny.png"
  },
  {
    id: 2,
    name: "DevNotes",
    description: "A simple note-taking app for developers. Supports markdown, tags, and dark mode.",
    stack: ["Next.js", "Prisma", "SQLite", "TailwindCSS"],
    githubUrl: "https://github.com/yourusername/devnotes",
    liveUrl: "https://devnotes.vercel.app",
    image: "/images/devnotes.png"
  },
  {
    id: 3,
    name: "TaskForge",
    description: "A kanban-style productivity tool for small teams with drag-and-drop support.",
    stack: ["Vue", "Firebase", "TailwindCSS"],
    githubUrl: "https://github.com/yourusername/taskforge",
    liveUrl: "https://taskforge.web.app",
    image: "/images/taskforge.png"
  }
]
