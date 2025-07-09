import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LayoutWrapper from "@/components/LayoutWrapper"
import HomePage from "@/pages/HomePage"

function App() {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <LayoutWrapper>
              <HomePage/>
            </LayoutWrapper>
          }
        />

        {/* Projects */}
        {/* Bugs */}
        {/* Recent Activities */}

      </Routes>
    </Router>    
  )
}

export default App
