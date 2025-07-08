import LayoutWrapper from "@/components/LayoutWrapper"
import Navbar from "@/components/Navbar"
import Overview from "./components/sections/Overview"

function App() {
  return (
    <main className="w-screen h-screen">
      <Navbar/>
      <LayoutWrapper>
        <Overview/>
      </LayoutWrapper>
    </main>
  )
}

export default App
