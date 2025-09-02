import type { SubmitHandler } from "react-hook-form";
import type { Project } from "@/lib/types";
import CustomDynamicForm, { type CustomDynamicFormPropsType } from "@/components/CustomDynamicForm";

const formFields = [
  { name: 'name', label: 'Project Name', type: 'text', required: true },
  { name: 'description', label: 'Description', type: 'text' },
  { name: 'link', label: 'Link', type: 'text' }
] satisfies CustomDynamicFormPropsType<Project>['fields']; // can also just use as const here, but TS still sees it as error

function SettingsPage() {

  const handleSubmit: SubmitHandler<Project> = async (data) => {
    console.log(data)
  };

  return (
    <div className="p-4 flex flex-col gap-4">

      <CustomDynamicForm
        className="flex flex-col gap-2"
        fields={formFields}
        onSubmit={handleSubmit}
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>
        <button
          type="button"
          className="bg-red-600 border px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>

    </div>
  )
}

export default SettingsPage