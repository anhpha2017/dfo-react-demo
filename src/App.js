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
  // Context used to manage todos
  const todoStore = useContext(Store);
  const [todoState, todoDispatch] = useReducer(todoReducer, todoStore)
  // Context used to manage visible filter list
  const filterStore = useContext(Filter);
  const [filterState, filterDispatch] = useReducer(visibilityFilterReducer, filterStore);


  return (
    <div className="container">
      <Header />
      <Filter.Provider value={{ filterState, filterDispatch }}>
        <Store.Provider value={{ todoState, todoDispatch }}>
          <AddTodo dispatch={todoDispatch} />
          <TodoList />
        </Store.Provider>
        <Footer />
      </Filter.Provider>
    </div>

  );
}

export default App;
