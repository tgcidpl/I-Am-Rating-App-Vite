import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import Rating from '@mui/material/Rating';

export function AddList() {
    const [listName, setListName] = useState('')
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState(5)
    const [author, setAuthor] = useState('')
    const [webLink, setWebLink] = useState('')
    const [imgLink, setImgLink] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        //below working code with Object.entries printing. Initial issue was [] instead of {} as base dataFromStorage
        //below now works with Object.assign instead of deconstruction of []

        const dataFromStorage = JSON.parse(localStorage.getItem(`lists`)) || {}
        const newList = {}
        newList[listName] = [{
            title,
            rating,
            author,
            webLink,
            imgLink
        }]

        const dataToSaveToLocalStorage = Object.assign(dataFromStorage, newList)
        localStorage.setItem('lists', JSON.stringify(dataToSaveToLocalStorage))

        navigate('/home')
    }

    return (
        <div>
            <h2 className="smallTile">Add your new list with its first entry!</h2>
            <form>
                <div className="largeTile">
                    <label>List name: </label>
                    <input
                        className="smallTile"
                        type="text"
                        value={listName}
                        onChange={(e) => {
                            setListName(e.target.value);
                        }}/>
                    <ul>
                        <li className="smallTile">
                            <label>Title</label>
                            <input
                                className="smallTile textField"
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}/>
                            <label>Your Initial Rating</label>
                            <div>
                                <Rating value={rating}
                                        onChange={(event, newValue) => {
                                            setRating(newValue)
                                        }} max={10}/>
                            </div>
                            <label>Author/ band/ creator/ notes</label>
                            <input
                                className="smallTile textField"
                                type="text"
                                value={author}
                                onChange={(e) => {
                                    setAuthor(e.target.value);
                                }}/>
                            <label>External Webpage Link</label>
                            <input
                                className="smallTile textField"
                                type="link"
                                value={webLink}
                                onChange={(e) => {
                                    setWebLink(e.target.value);
                                }}/>
                            <label>Image Link</label>
                            <input
                                className="smallTile textField"
                                type="link"
                                value={imgLink}
                                onChange={(e) => {
                                    setImgLink(e.target.value);
                                }}/>
                            <button
                                className="List__link btn largeTile"
                                type="submit"
                                onClick={handleSubmit}>
                                Submit
                            </button>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}

