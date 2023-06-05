import React from "react"
import { BsXSquare } from "react-icons/bs"
import { BsCheckSquare } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"
import { RxHome } from "react-icons/rx"
import EditHome from "./EditHome"

const Home = ({ home, setHome, handleDelete }) => {
  const checked = (id) => {
    setHome(
      home.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    )
  }

  const editing = (id) => {
    setHome(
      home.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const editWork = (edited, id) => {
    setHome(
      home.map((todo) =>
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
    <ul className="flex flex-col items-center justify-between w-full  my-2 py-2 gap-y-2  overflow-auto">
      <div className="flex items-center justify-center gap-1">
        <RxHome className="text-xl text-white" />
        <h1 className="font-bold text-white">Home</h1>
      </div>

      {home.map((home, index) => {
        return home.isEditing ? (
          <EditHome home={home} id={home.id} editWork={editWork} />
        ) : (
          <li
            key={index}
            className={`${
              home.checked
                ? "input flex items-center justify-between border border-gray-200 bg-gray-200 rounded-md text-black w-full p-3 overflow-auto relative"
                : "flex items-center justify-between border border-gray-200 bg-gray-200 rounded-md text-black w-full p-3 overflow-auto relative"
            }`}
          >
            <p className={`${home.checked ? "checked" : ""}`}>{home.task}</p>
            <p className="absolute text-[10px] top-[2px]">{home.date}</p>

            <div className="flex items-center gap-1">
              <FiEdit
                className={`${
                  home.checked
                    ? "checkbox text-orange-500 text-lg cursor-pointer"
                    : "text-orange-500 text-lg cursor-pointer"
                }`}
                onClick={() => editing(home.id)}
              />
              <BsCheckSquare
                className={`${
                  home.checked
                    ? "checkbox text-green-500 text-lg "
                    : "cursor-pointer text-green-500 text-lg"
                }`}
                onClick={() => checked(home.id)}
              />
              <BsXSquare
                className="cursor-pointer text-red-700 text-lg"
                onClick={() => handleDelete(home.id)}
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Home
