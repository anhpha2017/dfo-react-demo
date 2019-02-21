import React, { useContext } from 'react'
import Todo from '../components/Todo'
import Store, { Filter } from "../context"
import "./TodoList.css";

const getTodos = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_ALL':
        default:
            return todos;
    }
};

const TodoList = () => {

    const { todoState, todoDispatch } = useContext(Store);
    const { filterState } = useContext(Filter);

    const handleOnToggle = (id, dispatch) => dispatch({ type: "TOGGLE_TODO", id });
    const handleRemoveTodo = (id, dispatch) => dispatch({ type: "REMOVE_TODO", id });
    const handleToggleAll = (filter) => { todoDispatch({ type: "TOGGLE_ALL_TODOS", filter }) };

    // console.log(todoState);
    // return null;
    return (
        <div>
            <ul className="todo-list">
                {getTodos(todoState, filterState).map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onToggle={() => handleOnToggle(todo.id, todoDispatch)}
                        onRemove={() => handleRemoveTodo(todo.id, todoDispatch)}
                    />
                )}
            </ul>
            <div className="footer-row">
                <button className="btn-main" onClick={() => handleToggleAll(filterState)}>Toggle All</button>
            </div>
        </div>

    )
}

export default TodoList