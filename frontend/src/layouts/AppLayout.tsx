import Navbar from "@/components/Navbar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      {children}
    </div>
  )
}

export default AppLayout