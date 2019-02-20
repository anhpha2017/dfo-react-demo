import React, { useContext, useReducer } from 'react';

import Store, { Filter } from "./context";
import todoReducer from "./reducers/todoReducer"
import visibilityFilterReducer from "./reducers/visibilityFilterReducer"
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import Footer from "./containers/Footer"
import Header from "./components/Header"

import './App.css';

function App() {

  // Context used to manage todo list
  const todoStore = useContext(Store);
  const [todoState, todoDispatch] = useReducer(todoReducer, todoStore)
  // Context used to manage visible filter list
  const filterStore = useContext(Filter);
  const [filterState, filterDispatch] = useReducer(visibilityFilterReducer, filterStore);

  return (
    <Store.Provider value={{ todoState, todoDispatch }}>
      <Filter.Provider value={{ filterState, filterDispatch }}>
        <div>
          <Header />
          <AddTodo />
          <TodoList />
          <Footer />
        </div>
      </Filter.Provider>
    </Store.Provider>

  );
}

export default App;
