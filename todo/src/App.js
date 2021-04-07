import React, { useState } from "react";

import Header from "./components/Header";
import TodoSearch from "./components/todo/TodoSearch";
import TodoAdd from "./components/todo/TodoAdd";
import TodoList from "./components/todo/TodoList";
import ProgressBar from "./components/ProgressBar";
import CategoryAdd from "./components/category/CategoryAdd";
import CategoryList from "./components/category/CategoryList";

const App = () => {
  const items = [
    {
      title: "Category 1",
      id: Math.floor(Math.random() * 1000),
      todos: [
        {
          text: "Todo item 1",
          isDone: false,
        },
        {
          text: "Todo item 2",
          isDone: false,
        },
      ],
    },
    {
      title: "Category 2",
      id: Math.floor(Math.random() * 1000),
      todos: [
        {
          text: "Todo item 1",
          isDone: false,
        },
      ],
    },
  ];

  const [categories, setCategories] = useState(items);
  const [selectedCat, setSelectedCat] = useState(0);
  const [search, setSearch] = useState("");
  const [showDone, setShowDone] = useState(false);

  const filterTodo = (search, showDone) => {
    if (showDone) {
        return categories[selectedCat].todos.filter(el => el.isDone);
    } else {
        return categories[selectedCat].todos.filter((todo) =>
            todo.text.toLowerCase().includes(search)
        );
    }
  };

  const update = () => {
    let newCategories = [...categories];
    setCategories(newCategories);
  };

  const getProgress = () => {
    let finished = 0;
    categories[selectedCat].todos.forEach((item) => {
      return item.isDone ? finished++ : null;
    });

    return finished ? ((finished / categories[selectedCat].todos.length) * 100).toFixed(2) + "%" : "0";
  };

  const addTodo = (todo) => {
    let newTodos = [...categories[selectedCat].todos, todo];
    categories[selectedCat].todos = newTodos;
    update();
  };

  const finishTodo = (item) => {
    let newTodos = [...categories[selectedCat].todos];
    let index = newTodos.findIndex((el) => el === item);
    if (index > -1) {
        newTodos[index].isDone = !newTodos[index].isDone;
        categories[selectedCat].todos = newTodos;
        update();
    }
  };

  const deleteTodo = (item) => {
    let newTodos = [...categories[selectedCat].todos];
    let index = newTodos.findIndex((el) => el === item); 
    if (index > -1) {
        newTodos.splice(index, 1);
        categories[selectedCat].todos = newTodos;
        update();
    }
  };

  const addCategory = (category) => {
    let newCategories = [...categories, category];
    setCategories(newCategories);
  };

  const selectCategory = (cat) => {
    let index = categories.findIndex((el) => cat.id === el.id);
    setSelectedCat(index);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <Header title="Todo List" />
        </div>
        <div className="col-xs-12 col-sm-8">
          <TodoSearch setShowDone={setShowDone} searchTodo={setSearch} />
        </div>
        <div className="col-xs-12 mt-3">
          <ProgressBar progress={getProgress()} />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <CategoryAdd addCategory={addCategory} />
          <CategoryList
            categories={categories}
            selectCategory={selectCategory}
            selected={selectedCat}
          />
        </div>

        <div className="col-xs-12 col-sm-8">
          <TodoAdd addTodo={addTodo} catId={categories[selectedCat].id} />
          <TodoList
            todos={filterTodo(search, showDone)}
            finishTodo={finishTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
