export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id
    };
};

export const toggleAllTodos = (filter) => {
    return {
        type: 'TOGGLE_ALL_TODOS',
        filter
    };
};