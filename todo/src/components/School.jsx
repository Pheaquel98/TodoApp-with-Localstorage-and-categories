import React from "react"
import { BsXSquare } from "react-icons/bs"
import { BsCheckSquare } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { LuSchool } from "react-icons/lu"
import EditSchool from "./EditSchool"

const School = ({ school, handleDelete, setSchool }) => {
  const checked = (id) => {
    setSchool(
      school.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }

  const editing = (id) => {
    setSchool(
      school.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const editWork = (edited, id) => {
    setSchool(
      school.map((todo) =>
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
    <ul className="flex flex-col items-center justify-between w-full my-2 py-2 gap-y-2  overflow-auto">
      <div className="flex items-center justify-center gap-1">
        <LuSchool className="text-xl text-white" />
        <h1 className="font-bold text-white">School</h1>
      </div>

      {school.map((school, index) => {
        return school.isEditing ? (
          <EditSchool school={school} id={school.id} editWork={editWork} />
        ) : (
          <li
            key={index}
            className={`${
              school.checked
                ? "input flex items-center justify-between border border-gray-200 bg-gray-200 rounded-md text-black w-full p-3 overflow-auto relative"
                : "flex items-center justify-between border border-gray-200 bg-gray-200 rounded-md text-black w-full p-3 overflow-auto relative"
            }`}
          >
            <p className={`${school.checked ? "checked" : ""}`}>
              {school.task}
            </p>
            <p className="absolute text-[10px] top-[2px]">{school.date}</p>

            <div className="flex items-center gap-1">
              <FiEdit
                className={`${
                  school.checked
                    ? "checkbox text-orange-500 text-lg cursor-pointer"
                    : "text-orange-500 text-lg cursor-pointer"
                }`}
                onClick={() => editing(school.id)}
              />
              <BsCheckSquare
                className={`${
                  school.checked
                    ? "checkbox text-green-500 text-lg "
                    : "cursor-pointer text-green-500 text-lg"
                }`}
                onClick={() => checked(school.id)}
              />
              <BsXSquare
                className="cursor-pointer text-red-700 text-lg"
                onClick={() => handleDelete(school.id)}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default School
