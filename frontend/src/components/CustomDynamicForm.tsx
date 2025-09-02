// import { useEffect } from "react";
import { useForm, type SubmitHandler, type FieldValues, type Path } from "react-hook-form";

export type CustomDynamicFormPropsType<T extends FieldValues> = {
  className: string,
  fields: {
    name: Path<T>,
    label: string,
    type?: string,
    required?: boolean
  }[];
  onSubmit: SubmitHandler<T>,
};

function CustomDynamicForm<T extends FieldValues>({
  className,
  fields,
  onSubmit,
}: CustomDynamicFormPropsType<T>) {

  const { register, handleSubmit } = useForm<T>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
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
    </form>
  );
}

export default CustomDynamicForm;
