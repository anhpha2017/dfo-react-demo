import React from 'react'
// import PropTypes from 'prop-types'
import "./Todo.css";


class Todo extends React.Component {
    handleChange = () => this.props.onToggle(this.props.todo.id)
    handleRemove = () => this.props.onRemove(this.props.todo.id)
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.todo !== nextProps.todo) {
            return true;
        }
        return false;
    }
    render() {
        const { todo: { text, completed } } = this.props;
        const cssClass = completed ? "todo done" : "todo";
        return (
            <li className={cssClass}>
                <label>
                    <input type="checkbox" checked={completed} onChange={this.handleChange} />
                    {text}
                </label>
                <button className="btn-danger button-delete-todo" onClick={this.handleRemove} >x</button>

            </li>
        )
    }

}

// const Todo = React.memo(({ onToggle, onRemove, id, text, completed }) => {
//     const cssClass = completed ? "todo done" : "todo";
//     const handleChange = () => onToggle(id)
//     const handleRemove = () => onRemove(id)
//     return (
//         <li className={cssClass}>
//             <label>
//                 <input type="checkbox" checked={completed} onChange={handleChange} />
//                 {text}
//             </label>
//             <button className="btn-danger button-delete-todo" onClick={handleRemove} >x</button>

//         </li>
//     )
// });

// Todo.propTypes = {
//     onToggle: PropTypes.func.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
// }

export default Todo