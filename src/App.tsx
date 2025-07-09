import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayout from "@/components/layouts/MainLayout"
import HomePage from "@/pages/HomePage"

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
        {/* Bugs */}
        {/* Recent Activities */}

      </Routes>
    </Router>
  )
}

export default App
