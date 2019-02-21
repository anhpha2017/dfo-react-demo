import React from 'react'
import PropTypes from 'prop-types'
import "./Todo.css";

const Todo = ({ onToggle, onRemove, completed, text }) => {
    const cssClass = completed ? "todo done" : "todo";
    return (
        <li className={cssClass}>
            <label>
                <input type="checkbox" checked={completed} onChange={onToggle} />
                {text}
            </label>
            <button className="btn-danger button-delete-todo" onClick={onRemove} >x</button>

        </li>
    )
}

Todo.propTypes = {
    onToggle: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo