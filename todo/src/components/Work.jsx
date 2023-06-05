import React from "react"
import { BsXSquare } from "react-icons/bs"
import { BsCheckSquare } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { MdOutlineWorkOutline } from "react-icons/md"
import EditTodo from "./EditTodo"

const Work = ({ work, setWork, handleDelete }) => {
  const checked = (id) => {
    setWork(
      work.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }

  const editing = (id) => {
    setWork(
      work.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const editWork = (edited, id) => {
    setWork(
      work.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: edited,
              date: new Date().toLocaleString(),
              isEditing: !todo.isEditing,
            }
          : todo
      )
    )
  }

  return (
    <ul className="flex  flex-col items-center justify-between w-full my-2 py-2 gap-y-2 overflow-auto">
      <div className="flex items-center justify-center gap-1">
        <MdOutlineWorkOutline className="text-xl text-white" />
        <h1 className="font-bold text-white">Work</h1>
      </div>

      {work.map((work, index) => {
        return work.isEditing ? (
          <EditTodo work={work} id={work.id} editWork={editWork} />
        ) : (
          <li
            key={index}
            className={`${
              work.checked
                ? "input flex items-center justify-between border border-gray-200 bg-gray-200 rounded-md h-[50px] px-2 text-black w-full overflow-auto relative"
                : "flex items-center justify-between border border-gray-200 bg-gray-200 rounded-md h-[50px] px-2 text-black w-full overflow-auto relative"
            }`}
          >
            <p className={`${work.checked ? "checked" : ""}`}>{work.task}</p>
            <p className="absolute text-[10px] top-[2px]">{work.date}</p>

            <div className="flex items-center justify-center gap-1">
              <FiEdit
                className={`${
                  work.checked
                    ? "checkbox text-orange-500 text-lg cursor-pointer"
                    : "text-orange-500 text-lg cursor-pointer"
                }`}
                onClick={() => editing(work.id)}
              />
              <BsCheckSquare
                className={`${
                  work.checked
                    ? "checkbox text-green-500 text-lg "
                    : "cursor-pointer text-green-500 text-lg"
                }`}
                onClick={() => checked(work.id)}
              />
              <BsXSquare
                className="cursor-pointer text-red-700 text-lg"
                onClick={() => handleDelete(work.id)}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Work
