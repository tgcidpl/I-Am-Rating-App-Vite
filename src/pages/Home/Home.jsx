import React from "react";
import {Link} from 'react-router-dom';
import {Print} from '../../components/Print/index.jsx'
import {PageHeader} from "../../components/PageHeader/index.jsx";

export function Home() {

    if (!localStorage.getItem("lists")) {
        return (
            <>
                <PageHeader/>
                <Link className="Menu-list__link largeTile fadeInOpacity" to="/create">Create your first list!</Link>
            </>
        )
    }
    const dataFromStorageToPrint = JSON.parse(localStorage.getItem("lists"))
    if (Object.keys(dataFromStorageToPrint).length === 0) {
        return (
            <>
                <PageHeader/>
                <div className="container">
                    <Link className="Menu-list__link largeTile fadeInOpacity" to="/create">Create your first
                        list!</Link>
                </div>
            </>
        )
    }
    return (
        <>
            <PageHeader/>
            <Print/>
        </>
    )
}