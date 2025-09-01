import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import ProjectPage from "@/pages/ProjectPage";
import BugPage from "@/pages/BugPage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<BugPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </AppLayout>
  )
}

export default App
