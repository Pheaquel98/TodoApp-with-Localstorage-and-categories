import React from "react"
import { useState } from "react"

const EditHome = ({ home, editWork, id }) => {
  const [edited, setEdited] = useState(home.task)

  const handleEdit = (e) => {
    e.preventDefault()
    editWork(edited, id)
    setEdited("")
  }

  return (
    <form
      className="flex items-center justify-between border border-gray-200 bg-gray-200 rounded-md h-[50px] px-2 text-black w-full overflow-auto"
      onSubmit={handleEdit}
    >
      <input
        type="text"
        value={edited}
        className="p-2 rounded-l-md w-full bg-gray-300"
        onChange={(e) => setEdited(e.target.value)}
      />
      <button className="rounded-r-md bg-orange-500 p-2 text-white font-bold hover:opacity-70 transition-all">
        Done
      </button>
    </form>
  )
}

export default EditHome
