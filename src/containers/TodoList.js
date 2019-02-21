import React from 'react';
import Todo from '../components/Todo';
import memoize from "memoize-one";
import Store, { Filter } from "../context";
import { toggleTodo, removeTodo, toggleAllTodos } from "../actions/todoActionCreator";
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

class TodoList extends React.Component {
    render() {
        return (
            <Store.Consumer>
                {({ todoState, todoDispatch }) => {
                    const handleOnToggle = memoize((id) => todoDispatch(toggleTodo(id)));
                    const handleRemoveTodo = memoize((id) => todoDispatch(removeTodo(id)));
                    const handleToggleAll = memoize((filter) => todoDispatch(toggleAllTodos(filter)));
                    return (
                        <Filter.Consumer>
                            {({ filterState }) => (
                                <div>
                                    <ul className="todo-list">
                                        {getTodos(todoState, filterState).map(todo =>
                                            <Todo
                                                key={`TODO_${todo.id}`}
                                                todo={todo}
                                                onToggle={handleOnToggle}
                                                onRemove={handleRemoveTodo}
                                            />
                                        )}
                                    </ul>
                                    <div className="footer-row">
                                        <button className="btn-main"
                                            onClick={() => handleToggleAll(filterState)}>Toggle All</button>
                                    </div>
                                </div>
                            )}
                        </Filter.Consumer>
                    )
                }}
            </Store.Consumer>


        )
    }
}

// const TodoList = () => {

//     const { todoState, todoDispatch } = useContext(Store);
//     const { filterState } = useContext(Filter);

//     const handleOnToggle = (id) => todoDispatch({ type: "TOGGLE_TODO", id });
//     const handleRemoveTodo = (id) => todoDispatch({ type: "REMOVE_TODO", id });
//     const handleToggleAll = (filter) => { todoDispatch({ type: "TOGGLE_ALL_TODOS", filter }) };

//     // console.log(todoState);
//     // return null;
//     return (
//         <div>
//             <ul className="todo-list">
//                 {getTodos(todoState, filterState).map(todo =>
//                     <Todo
//                         key={todo.id}
//                         {...todo}
//                         onToggle={handleOnToggle}
//                         onRemove={handleRemoveTodo}
//                     />
//                 )}
//             </ul>
//             <div className="footer-row">
//                 <button className="btn-main" onClick={() => handleToggleAll(filterState)}>Toggle All</button>
//             </div>
//         </div>

//     )
// }

export default TodoList