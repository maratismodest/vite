import React from 'react';
import {Todo} from "../types";

interface TodosProps {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todos = ({todos, setTodos}: TodosProps) => {
  return (
    <section>
      <h2>Todos</h2>
      <ul>
        {todos.map(({id, title, description}) => (
          <li key={id} style={{position: 'relative'}}>
            <h3>{title}</h3>
            <p>{description}</p>
            <button style={{position: 'absolute', top: 0, right: 0}}
                    onClick={() => setTodos(todos => todos.filter(todo => todo.id !== id))}>
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todos;
