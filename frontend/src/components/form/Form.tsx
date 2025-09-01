import { useForm, type SubmitHandler } from 'react-hook-form';

type FormPropsType<T> = {
  fields: {
    name: keyof T;
    label: string;
    type?: string;
  }[];
  onSubmit: SubmitHandler<T>;
};

function Form({
  fields,
  onSubmit,
}: FormPropsType<T>) {

  const { register, handleSubmit } = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      {fields.map((field) => (
        <div key={String(field.name)}>
          <label>{field.label}</label>
          <input
            {...register(field.name)}
            type={field.type || "text"}
            className="border p-2 rounded"
          />
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  )

}

export default Form