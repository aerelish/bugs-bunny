import { Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layouts/AppLayout";
import ProjectPage from "@/components/pages/ProjectPage";
import BugPage from "@/components/pages/BugPage";

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
