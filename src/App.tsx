import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "@/components/layouts/MainLayout"
import HomePage from "@/pages/HomePage"
import ProjectPage from "@/pages/ProjectPage"
import BugPage from "@/pages/BugPage"

function App() {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={
            <MainLayout>
              <ProjectPage />
            </MainLayout>
          }
        />
        {/* Bugs */}
        <Route
          path="/bugs"
          element={
            <MainLayout>
              <BugPage />
            </MainLayout>
          }
        />
        {/* Recent Activities */}

      </Routes>
    </Router>
  )
}

export default App
