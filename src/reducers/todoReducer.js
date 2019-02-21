const createTodo = (id, text) => ({
    id,
    text,
    completed: false
});

const createToggledTodo = t => ({ ...t, completed: !t.completed })
const makeDoneAllTodos = todos => todos.map(t => ({ ...t, completed: true }));
const isNotCompletedAll = todos => todos.some(t => !t.completed);

const toggleTodo = (todos, id) =>
    todos.map(t => (t.id !== id ? t : createToggledTodo(t)));

const toggleAllTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.map(t => t.completed ? createToggledTodo(t) : t);
        case 'SHOW_ACTIVE':
            return todos.map(t => !t.completed ? createToggledTodo(t) : t);
        default:
            return isNotCompletedAll(todos) ? makeDoneAllTodos(todos) : todos.map(t => createToggledTodo(t));
    }
}

const removeTodo = (todos, id) => todos.filter(t => t.id !== id);

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            const nextTodoId = state.length ? state.length + 1 : 1;
            return [...state, createTodo(nextTodoId, action.text)];
        case "REMOVE_TODO":
            return removeTodo(state, action.id);
        case "TOGGLE_TODO":
            return toggleTodo(state, action.id);
        case "TOGGLE_ALL_TODOS":
            return toggleAllTodos(state, action.filter);
        default:
            return state;
    }
}

export default todoReducer;