import React from "react";
import {Link} from 'react-router-dom';
import {Print} from '../../components/Print/index.jsx'
import {PageHeader} from "../../components/PageHeader/index.jsx";

export function Home() {

    if (!localStorage.getItem("lists")) {
        return (
            <>
                <PageHeader/>
                <Link className="Menu-list__link largeTile" to="/create">Create your first list!</Link>
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