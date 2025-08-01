import { Plus } from 'lucide-react';

function SideBarSection() {
  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-8">
        <h1 className="text-2xl font-semibold">Projects</h1>

        <div className="dropdown dropdown-start">
          <button tabIndex={0} role='button' className="btn btn-circle bg-secondary text-base-100">
            <Plus strokeWidth={2.5} />
          </button>
          <ul tabIndex={0} className="mt-1 dropdown-content menu bg-secondary rounded-box z-1 w-48 p-2 shadow-sm text-md text-base-300">
            <li><a className='hover:bg-neutral hover:text-white'>Report a Bug</a></li>
            <li><a className='hover:bg-neutral hover:text-white'>Create a New Task</a></li>
            <li><a className='hover:bg-neutral hover:text-white'>Create a New Project</a></li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default SideBarSection