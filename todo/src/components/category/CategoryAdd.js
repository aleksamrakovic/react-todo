import React, { Fragment, useState } from 'react'

const CategoryAdd = ({addCategory}) => {
    const [value, setValue] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        addCategory({
            title: value,
            id: Math.floor(Math.random() * 1000),
            todos: []
        });
        setValue('');
    }
    
    return (
        <Fragment>
            <form onSubmit={onFormSubmit}>
                <div className="input-group mb-3">
                    <input 
                        placeholder="Enter category" 
                        onChange={e => setValue(e.target.value)} 
                        value={value} 
                        type="text" 
                        className="form-control" 
                    />
                    <button className="btn btn-outline-primary" type="submit">Add</button>
                </div>
            </form>
        </Fragment>
    );
}

export default CategoryAdd;
