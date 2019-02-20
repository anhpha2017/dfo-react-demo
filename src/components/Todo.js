import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onToggle, onRemove, completed, text }) => (
    <div>
        <label>
            <input type="checkbox" checked={completed} onChange={onToggle} />
            {text}
        </label>
        <button onClick={onRemove} >x</button>

    </div>
)

Todo.propTypes = {
    onToggle: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo