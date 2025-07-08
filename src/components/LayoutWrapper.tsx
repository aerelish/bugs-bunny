
type LayoutWrapperProps = {
  children: React.ReactNode
};

function LayoutWrapper({children} : LayoutWrapperProps) {
  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      {children}
    </div>
  )
}

export default LayoutWrapper