import React from 'react';

const CategoryList = ({categories, selectCategory, selected}) => {
    console.log(categories);
    const renderCategories = categories.map((cat, index) => {
        let active = selected === index ? 'active' : '';

        return (
            <button 
                key={cat.id} 
                onClick={() => selectCategory(cat)} 
                className={`list-group-item list-group-item-active ` + active}
            >
                {cat.title}
            </button>
        );
    });

    return (
        <>
            <div className="list-group">
                {renderCategories}
            </div>
        </>
    );
}

export default CategoryList;
