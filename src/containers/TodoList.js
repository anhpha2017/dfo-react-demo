import React, { useContext } from 'react'
import Todo from '../components/Todo'
import Store, { Filter } from "../context"

const handleOnToggle = (id, dispatch) => dispatch({ type: "TOGGLE_TODO", id });
const handleRemoveTodo = (id, dispatch) => dispatch({ type: "REMOVE_TODO", id });
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


    // console.log(todoState);
    // return null;
    return (

        <div>
            {getTodos(todoState, filterState).map(todo =>
                <Todo
                    key={todo.id}
                    {...todo}
                    onToggle={() => handleOnToggle(todo.id, todoDispatch)}
                    onRemove={() => handleRemoveTodo(todo.id, todoDispatch)}
                />
            )}
        </div>
    )
}

export default TodoList