import { useNavigate } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { type Project } from "@/lib/types";
import CreateForm, { type CreateFormPropsType } from "@/components/form/CreateForm"
import createProject from "@/services/project/createProject";
import { UseMainContext } from "@/context/MainContext";

const fields = [
  { name: 'name', label: 'Project Name', type: 'text', required: true },
  { name: 'description', label: 'Description', type: 'text' },
  { name: 'link', label: 'Link', type: 'text' }
] satisfies CreateFormPropsType<Project>['fields']; // can also just use as const here, but TS still sees it as error

function CreateProject() {

  const navigate = useNavigate();

  const { projects, setProjects } = UseMainContext();

  const handleSubmit: SubmitHandler<Project> = async (data) => {
    const response = await createProject(data);
    if (response.success && response.data) {
      setProjects([...projects, response.data]);
    } else {
      console.error(response.error || 'Failed to fetch projects...');
    };
    navigate('/project');
  };

  return (

    <div className="mx-[20%] p-2 ">
      <CreateForm<Project>
        entity="project"
        fields={fields}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/project')}
      />
    </div>

  )
}

export default CreateProject