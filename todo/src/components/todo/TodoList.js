import React, { Fragment } from 'react'

const TodoList = ({todos, finishTodo, deleteTodo}) => {
    const newItems = todos.map((todo, index) => {
        return (
            <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
                <div>
                    <input value={todo.isDone} checked={todo.isDone} onChange={() => finishTodo(todo)} className="form-check-input me-1" type="checkbox" />
                    {todo.text}
                </div>
                <button onClick={() => deleteTodo(todo)} className="btn btn-primary btn-sm">Delete</button>
            </li>
        );
    });

    return (
        <Fragment>
            <ul className="list-group">
                {newItems}
            </ul>
        </Fragment>
    );
}

export default TodoList;
