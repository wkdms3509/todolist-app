import React, {useState} from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');

    const ChangeEventHandler = e => {
        setInput(e.target.value);
    }

    const SubmitEventHandler = (e) => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })

        setInput('');
    }

    return (
    <form className="todo-form" onSubmit={SubmitEventHandler}>
        <input className="todo-input" type="text" onChange={ChangeEventHandler} placeholder="Add a todo" value={input} name="text" />
        <button className="todo-btn">Add todo</button>
    </form>
    )
}

export default TodoForm
