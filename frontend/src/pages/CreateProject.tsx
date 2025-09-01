import { useNavigate } from "react-router-dom";
import CreateForm from "@/components/CreateForm"

function CreateProject() {

  const navigate = useNavigate();

  const handleSubmit = (data: { name: string; description: string }) => {
    console.log("New Project Data:", data);
    // Call API here
    navigate('/project'); // Go back after creating project
  };

  return (
    <div>
      <CreateForm
        formType="project"
        onSubmit={handleSubmit}
        onCancel={() => navigate('/project')}
      />
    </div>
  )
}

export default CreateProject