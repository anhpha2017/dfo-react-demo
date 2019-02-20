import React from "react";

// Store Context is the global context that is managed by reducers.

export const Filter = React.createContext("SHOW_ALL");

const Store = React.createContext(
    [
        // Initial Data
        { id: 1, text: "Buy milk", completed: false },
        { id: 2, text: "Some eggs", completed: false },
        { id: 3, text: "Go to work", completed: false }
    ]
);

export default Store;
