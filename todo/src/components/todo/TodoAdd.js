import React, { Fragment, useState } from 'react'

const TodoAdd = ({addTodo}) => {
    const [value, setValue] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo({
                text: value,
                isDone: false
            });
            setValue('');
        }
        
    }
    
    return (
        <Fragment>
            <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3">
                    <input 
                        placeholder="Add todo" 
                        onChange={e => setValue(e.target.value)} 
                        value={value} 
                        type="text" 
                        className="form-control"
                        required
                    />
                    <button className="btn btn-outline-primary" type="submit">Add</button>
                </div>
                <div className="invalid-feedback">
                    Field is invalid.
                </div>
            </form>
        </Fragment>
    );
};

export default TodoAdd;
