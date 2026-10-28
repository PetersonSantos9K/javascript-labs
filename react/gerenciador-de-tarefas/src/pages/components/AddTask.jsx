import { useState } from "react";
import Input from "../../components/Input";

export default function AddTask({ handleAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


 /*

   <div className="text-center">
        <label
          className="text-center font-medium text-white bg-[#94A3B8] w-full block rounded-t-md cursor-pointer"
          htmlFor="dateEnd"
        >
          Data de termino
        </label>
        <input
          type="date"
          id="dateEnd"
          onChange={({target}) => setDateEnd(target.value) }
          value={dateEnd}
          className="bg-white w-full p-2 rounded-b-md border-[#94A3B8] border-1 focus:outline-[#94A3B8]"
        />
      </div>

 */

  return (
    <form className="flex flex-col gap-5" onSubmit={() => handleAddTask(title,description)}>
      <Input
        placeholder="Título da tarefa"
        type="text"
        required
        onChange={({ target }) => setTitle(target.value)}
        value={title}
      />
      <Input 
        placeholder="Descrição da tarefa" 
        type="text" 
        required 
        onChange={({target}) => setDescription(target.value)}
        value={description}
      />

   

      <button
        type="submit"
        className="bg-[#64748B] w-full p-2 rounded-md text-white font-medium cursor-pointer"
      >
        Adicionar
      </button>
    </form>
  );
}
