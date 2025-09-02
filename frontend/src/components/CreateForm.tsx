import { useForm, type SubmitHandler, type FieldValues, type Path } from "react-hook-form";

export type CreateFormPropsType<T extends FieldValues> = {
  entity: "project" | "bug" | "task";
  fields: {
    name: Path<T>,
    label: string,
    type?: string,
    required?: boolean
  }[];
  onSubmit: SubmitHandler<T>;
  onCancel: () => void;
};

function CreateForm<T extends FieldValues>({
  entity,
  fields,
  onSubmit,
  onCancel,
}: CreateFormPropsType<T>) {

  const { register, handleSubmit } = useForm<T>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4"
    >
      <h2 className="text-xl font-semibold">Create a New <span className="capitalize">{entity}</span></h2>

      {fields.map((field) => (
        <div key={String(field.name)} className="flex flex-col gap-1 ">
          <label>{field.label}</label>
          <input
            {...register(field.name, { required: field.required || false })}
            type={field.type || "text"}
            className="border p-2 rounded"
          />
        </div>
      ))}

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create {entity}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default CreateForm;
