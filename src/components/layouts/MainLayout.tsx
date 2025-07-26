import Navbar from "@/components/Navbar";
import TopBar from "../Topbar";

type MainLayoutProps = {
  children: React.ReactNode
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-screen, h-screen">
      <TopBar />
      <Navbar />
      <div className="px-4 max-w-screen-xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default MainLayout