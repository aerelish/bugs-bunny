import cn from '@/utils/cn';
import { type Project } from '@/lib/types';

type DisplaySectionProps = {
  className?: string,
  header: string | undefined,
  selectedItem: Project | null,
}

function DisplaySection({
  className,
  header,
  selectedItem
}: DisplaySectionProps) {

  return (
    <>
      {/* Display Section */}
      {selectedItem ? (
        <div className={className}>
          <h1 className="text-4xl font-semibold p-4 items-center">{header}</h1>
          <div
            role="tablist"
            className="w-full tabs tabs-border border-b border-border-dark pt-1"
          >
            <a role="tab" className="tab tab-active">Overview</a>
            <a role="tab" className="tab">Board</a>
            <a role="tab" className="tab">Bugs</a>
            <a role="tab" className="tab">Tasks</a>
          </div>
        </div>
      ) : (
        <div className={cn("flex items-center justify-center", className)}>
          <p className="text-lg">Create New Project</p>
        </div>
      )}
    </>
  )
}

export default DisplaySection