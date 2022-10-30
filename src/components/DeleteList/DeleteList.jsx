import React from 'react';

export function DeleteList(props) {

    function handleClickDeleteList() {
        const result = confirm(`Are you sure you want to delete ${props.listName}?`);
        if (result) {

            const dataFromStorage = JSON.parse(localStorage.getItem("lists")) || {}
            delete dataFromStorage[props.listName]

            localStorage.setItem('lists', JSON.stringify(dataFromStorage))
            location.reload()
        }
    }

    return (
        <button className="btn smallTile"  onClick={handleClickDeleteList}>Delete List</button>
    )
}