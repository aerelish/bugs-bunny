import { Plus } from 'lucide-react';

function ProjectPage() {
  return (
    <div className="h-full flex  px-4 max-w-screen-2xl mx-auto w-full">

      {/* Sidebar Section */}
      <div className="flex-1/5 border-r-2 border-base-300 p-4 h-full">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Projects</h1>
          <button className="btn btn-circle">
            <Plus strokeWidth={2.5} />
          </button>
        </div>

        {/* Project List */}
        <div>

        </div>

      </div>

      {/* Display Section */}
      <div className="flex-4/5 p-4 relative">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-semibold px-2.5">Quickit</h1>
          {/* Project Tab List (Full-width border) */}
          <div
            role="tablist"
            className="absolute mt-12 left-0 right-0 w-screen tabs tabs-border border-b-2 border-base-300 px-4"
          >
            <a role="tab" className="tab">Overview</a>
            <a role="tab" className="tab tab-active">Board</a>
            <a role="tab" className="tab">Bugs</a>
            <a role="tab" className="tab">Todos</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectPage

