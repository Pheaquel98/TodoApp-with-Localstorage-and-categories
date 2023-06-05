import React, { useEffect } from "react"
import { useState } from "react"
import Work from "./components/Work"
import School from "./components/School"
import Home from "./components/Home"
import reactlogo from "./images/reactlogo.png"

function App() {
  const [todo, setTodo] = useState("")
  const [value, setValue] = useState("")
  const [school, setSchool] = useState(
    localStorage.getItem("school")
      ? JSON.parse(localStorage.getItem("school"))
      : []
  )
  const [work, setWork] = useState(
    localStorage.getItem("work") ? JSON.parse(localStorage.getItem("work")) : []
  )
  const [home, setHome] = useState(
    localStorage.getItem("home") ? JSON.parse(localStorage.getItem("home")) : []
  )

  useEffect(() => {
    localStorage.setItem("work", JSON.stringify(work))
  }, [work])

  useEffect(() => {
    localStorage.setItem("school", JSON.stringify(school))
  }, [school])

  useEffect(() => {
    localStorage.setItem("home", JSON.stringify(home))
  }, [home])

  const handleClick = () => {
    if (todo.trim().length === 0) {
      alert("Please write some Task.")
      return
    }
    if (value === "") {
      alert("Please select category.")
      return
    }
    if (value === "work") {
      setWork([
        ...work,
        {
          id: Math.floor(Math.random() * 999999),
          checked: false,
          isEditing: false,
          date: new Date().toLocaleString(),
          task: todo,
        },
      ])
    }
    if (value === "school") {
      setSchool([
        ...school,
        {
          id: Math.floor(Math.random() * 999999),
          checked: false,
          isEditing: false,
          date: new Date().toLocaleString(),
          task: todo,
        },
      ])
    }
    if (value === "home") {
      setHome([
        ...home,
        {
          id: Math.floor(Math.random() * 999999),
          checked: false,
          isEditing: false,
          date: new Date().toLocaleString(),
          task: todo,
        },
      ])
    }
    setTodo("")
  }

  const handleDelete = (id) => {
    setWork(work.filter((todo) => todo.id !== id))
    setSchool(school.filter((todo) => todo.id !== id))
    setHome(home.filter((todo) => todo.id !== id))
  }

  const handleClear = () => {
    setSchool([])
    setWork([])
    setHome([])
  }

  return (
    <div className="container w-[1200px] h-[800px] mx-auto px-4 py-6 bg-gray-700 rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2 my-4">
          <img className="w-[75px] h-[75px] animate-spin" src={reactlogo} />
          <h1 className="text-4xl text-white font-semibold text-center">
            Todo Manager
          </h1>
        </div>

        <div className="flex items-center justify-between w-full border-gray-600 bg-gray-600 border py-2 px-4 rounded-lg">
          <div className="flex items-center w-full">
            <input
              className="border border-t border-b border-l rounded-l-lg w-[75%] p-2 outline-none"
              type="text"
              value={todo}
              id="todos"
              placeholder="Add some task..."
              onChange={(e) => setTodo(e.target.value)}
            />

            <button
              className="bg-orange-500 hover:bg-orange-600 border border-orange-500 rounded-r-lg transition-all text-white font-bold py-2 px-4 w-[15%] my-2"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white" htmlFor="work">
              Work:
            </label>
            <input
              type="radio"
              name="todo"
              id="work"
              value="work"
              onChange={(e) => setValue(e.target.value)}
            />
            <label className="text-white" htmlFor="school">
              School:
            </label>
            <input
              type="radio"
              name="todo"
              id="school"
              value="school"
              onChange={(e) => setValue(e.target.value)}
            />
            <label className="text-white" htmlFor="home">
              Home:
            </label>
            <input
              type="radio"
              name="todo"
              id="home"
              value="home"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2 items-start justify-center w-full border px-4 bg-gray-600 border-gray-600 rounded-lg">
          <Work
            work={work}
            setWork={setWork}
            handleDelete={handleDelete}
            className="h-full"
          />
          <School
            school={school}
            handleDelete={handleDelete}
            setSchool={setSchool}
            className="h-full"
          />
          <Home
            home={home}
            handleDelete={handleDelete}
            setHome={setHome}
            className="h-full"
          />
        </div>
        <button
          onClick={handleClear}
          disabled={[...work, ...home, ...school].length === 0 ? true : false}
          className="bg-red-500 enabled:hover:bg-red-600  transition-all text-white font-bold py-2 px-4 rounded-lg my-2 disabled:cursor-not-allowed disabled:opacity-80"
        >
          Delete Todos
        </button>
      </div>
    </div>
  )
}

export default App
