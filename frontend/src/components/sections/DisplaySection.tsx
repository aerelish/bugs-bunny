type DisplaySectionProps = {
  className?: string,
  header: string | undefined,
}

function DisplaySection({
  className,
  header,
}: DisplaySectionProps) {

  return (
    <>
      {/* Display Section */}
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
    </>
  )

}

export default DisplaySection