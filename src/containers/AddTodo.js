import React, { useState } from "react";
import { addTodo } from "../actions/todoActionCreator";
import "./AddTodo.css";
const AddTodo = React.memo(({ dispatch }) => {
    // const { dispatch } = useContext(Store);

    // Creating a local state to have currently writing
    // todo item that will be sent to the global store.
    const [todo, setTodo] = useState("");

    function handleTodoChange(e) {
        setTodo(e.target.value);
    }

    function handleTodoAdd() {
        dispatch((addTodo(todo)));
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
})

export default AddTodo;
