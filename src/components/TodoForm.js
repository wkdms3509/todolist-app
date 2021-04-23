import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }

    return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input className="todo-input" type="text" onChange={handleChange} ref={inputRef} placeholder="Add a todo" value={input} name="text" />
        <button className="todo-btn">Add todo</button>
    </form>
    )
}

export default TodoForm
