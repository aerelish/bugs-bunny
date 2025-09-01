import { useNavigate } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import CreateForm, { type CreateFormPropsType } from "@/components/CreateForm"

type CreateProjectInputs = {
  username: string,
  email: string,
  password: string,
};

const fields = [
  { name: "username", label: "Username", type: 'text' },
  { name: "email", label: "Email", type: "text" },
  { name: "password", label: "Password", type: "text" },
] satisfies CreateFormPropsType<CreateProjectInputs>["fields"]; // can also just use as const here, but TS still sees it as error

function CreateProject() {

  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<CreateProjectInputs> = (data) => {
    console.log("New Project Data:", data);

    // * Call API Here    

    navigate('/project');
  };

  return (
    <div>
      <CreateForm<CreateProjectInputs>
        entity="project"
        fields={fields}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/project')}
      />
    </div>
  )
}

export default CreateProject