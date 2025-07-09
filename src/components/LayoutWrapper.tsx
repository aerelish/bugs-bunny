import Navbar from "@/components/Navbar";

type LayoutWrapperProps = {
  children: React.ReactNode
};

function LayoutWrapper({children} : LayoutWrapperProps) {
  return (
    <div className="w-screen, h-screen">
      <Navbar/>
      <div className="p-4 max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default LayoutWrapper