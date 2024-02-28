import './App.css'
import {useState} from "react";
import Form from "./components/form.tsx";
import Todos from "./components/todos.tsx";
import {Todo} from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Form setTodos={setTodos}/>
        <Todos todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
