import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import ProjectPage from "@/pages/ProjectPage";
import CreateProject from "@/pages/CreateProject";
import BugPage from "@/pages/BugPage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<BugPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/new" element={<CreateProject />} />
      </Routes>
    </AppLayout>
  )
}

export default App
