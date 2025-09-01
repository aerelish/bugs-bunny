import { useState } from "react";

type CreateFormType = {
  formType: 'project' | 'bug' | 'task',
  onSubmit: (data: { name: string; description: string }) => void;
  onCancel: () => void;
}

function CreateForm({
  formType,
  onSubmit,
  onCancel
}: CreateFormType) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <h2 className="text-xl font-semibold">Create New {formType}</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={`Enter ${formType} name`}
          className="border rounded p-2"
          required
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={`Enter ${formType} description`}
          className="border rounded p-2"
        />

        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Create {formType}
          </button>
          <button type="button" onClick={onCancel} className="border px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateForm