import React, {FormEvent, useState} from 'react';
import {Todo} from "../types";

interface FormProps {
  title: string,
  description: string
}

const initialState: FormProps = {
  title: '',
  description: ''
}

interface TodosProps {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Form = ({setTodos}: TodosProps) => {

  const [{title, description}, setState] = useState<FormProps>(initialState)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodos(prev => prev.concat([{id: Date.now(), title, description}]))
    setState(initialState)
  }

  const handleChange = (key: keyof FormProps, value: string) => {
    setState(prev => ({...prev, [key]: value}))
  }

  return (
    <section>
      <h2>Form</h2>
      <form onSubmit={onSubmit}>
        <input type="text" required value={title} onChange={(e) => handleChange('title', e.target.value)}/>
        <textarea required value={description} onChange={(e) => handleChange('description', e.target.value)}/>
        <button type='submit'>Add</button>
      </form>
    </section>
  );
};

export default Form;
