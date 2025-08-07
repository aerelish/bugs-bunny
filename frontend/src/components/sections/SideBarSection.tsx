import { Plus } from 'lucide-react';
import { type Project } from '@/lib/types';

type SideBarSectionProps = {
  className?: string,
  header: string | undefined,
  listItems: Project[] | null,
  selectedItem: Project | null,
  setSelectedItem: React.Dispatch<React.SetStateAction<Project | null>>
}

function SideBarSection({
  className,
  header,
  listItems,
  selectedItem,
  setSelectedItem
}: SideBarSectionProps) {

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex justify-between items-center px-8">
        <h1 className="text-2xl font-semibold">{header}</h1>

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

      {/* List */}
      <div className='mt-4'>
        {listItems ? (
          <ul className="text-lg ml-2">
            {listItems.map((listItem) => (

              <li
                key={listItem.id}
                className={`py-2 px-6 cursor-pointer hover:text-base-300 hover:bg-primary rounded-l-4xl ${selectedItem?.id === listItem.id && "border-r-4 border-primary"}`}
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedItem(listItem);
                }}>
                {listItem.name}
              </li>

            ))}
          </ul>
        ) : (
          <p className="mt-4">Loading projects...</p>
        )}
      </div>
    </div>
  )
}

export default SideBarSection