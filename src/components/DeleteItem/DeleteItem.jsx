import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteItem(props) {

    function handleClickDeleteItem() {

        const result = confirm(`Are you sure you want to delete ${props.title}?`);
        if (result) {

            const dataFromStorage = JSON.parse(localStorage.getItem("lists")) || {}
            const listFromStorage = dataFromStorage[props.listName]

            //filter below should splice not work
            // const filteredList = listFromStorage.filter(el=>el.title !== props.title)

            //below code for deleting items by index, works only if printed lists are already sorted
            listFromStorage.splice(props.index, 1)

            localStorage.setItem('lists', JSON.stringify(dataFromStorage))
            location.reload()
        }
    }

    return (
        <DeleteIcon className="btn deleteBtn" onClick={handleClickDeleteItem}/>
    )
}