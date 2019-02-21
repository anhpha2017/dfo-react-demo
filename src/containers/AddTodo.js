import React, { useContext, useState } from "react";
import Store from "../context";
import "./AddTodo.css";
export default function AddTodo() {
    const { todoDispatch } = useContext(Store);

    // Creating a local state to have currently writing
    // todo item that will be sent to the global store.
    const [todo, setTodo] = useState("");

    function handleTodoChange(e) {
        setTodo(e.target.value);
    }

    function handleTodoAdd() {
        todoDispatch({ type: "ADD_TODO", text: todo });
        setTodo("");
    }

    function handleSubmitForm(event) {
        if (event.keyCode === 13) handleTodoAdd();
    }

    return (
        <div className="add-todo">
            <input
                value={todo}
                autoFocus={true}
                placeholder="Enter todo name here"
                onKeyUp={handleSubmitForm}
                onChange={handleTodoChange}
            />
        </div>
    );
}
