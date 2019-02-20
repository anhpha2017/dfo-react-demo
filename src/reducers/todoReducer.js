const createTodo = (id, text) => ({
    id,
    text,
    completed: false
});

const toggleTodo = (todos, id) =>
    todos.map(t => (t.id !== id ? t : { ...t, completed: !t.completed }));

const toggleAllTodos = (todos) =>
    todos.map(t => ({ ...t, completed: !t.completed }));

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
            return toggleAllTodos(state);
        default:
            return state;
    }
}

export default todoReducer;