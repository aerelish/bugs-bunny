// import { Plus } from 'lucide-react';
import cn from '@/utils/cn';
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
  setSelectedItem,
}: SideBarSectionProps) {

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex justify-between items-center px-4">
        <h1 className="uppercase text-2xl font-semibold">{header}</h1>

        {/* TODO: move this as another component */}
        {/* <div className="dropdown dropdown-start">
          <button tabIndex={0} role='button' className="btn btn-circle bg-secondary text-base-100">
            <Plus strokeWidth={2.5} />
          </button>
          <ul tabIndex={0} className="mt-1 dropdown-content menu bg-secondary rounded-box z-1 w-48 p-2 shadow-sm text-md text-base-300">
            <li><a className='hover:bg-neutral hover:text-white'>Report a Bug</a></li>
            <li><a className='hover:bg-neutral hover:text-white'>Create a New Task</a></li>
            <li><a className='hover:bg-neutral hover:text-white'>Create a New Project</a></li>
          </ul>
        </div> */}

      </div>

      {/* List */}
      <div className='mt-4 px-4'>
        <h1 className='pb-2 tracking-widest text-gray-500'>FAVORITES</h1>
        {listItems ? (
          <ul>
            {listItems.map((listItem) => (
              <li
                key={listItem.id}
                className={cn("py-2 px-4 cursor-pointer rounded-sm hover:text-white hover:bg-primary ", selectedItem?.id === listItem.id && "font-bold")}
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedItem(listItem);
                }}>
                {listItem.name}
              </li>

            ))}

          </ul>
        ) : (
          <p className="mt-4">Loading...</p>
        )}
      </div>
    </div>
  )
}

export default SideBarSection