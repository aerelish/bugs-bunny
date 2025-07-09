import Navbar from "@/components/Navbar";

type MainLayoutProps = {
  children: React.ReactNode
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-screen, h-screen">
      <Navbar />
      <div className="px-4 max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default MainLayout