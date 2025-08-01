import { Routes, Route } from "react-router-dom";
import ProjectPage from "@/components/pages/ProjectPage";
import AppLayout from "@/components/layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<ProjectPage />} />
      </Routes>
    </AppLayout>
  )
}

export default App
