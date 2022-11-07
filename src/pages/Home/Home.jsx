import React from "react";
import {Link} from 'react-router-dom';
import {Print} from '../../components/Print/index.jsx'
import {PageHeader} from "../../components/PageHeader/index.jsx";

export function Home() {

    if (!localStorage.getItem("lists") || Object.keys(JSON.parse(localStorage.getItem("lists"))).length === 0) {
        {
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
    }
    return (
        <>
            <PageHeader/>
            <Print/>
        </>
    )
}