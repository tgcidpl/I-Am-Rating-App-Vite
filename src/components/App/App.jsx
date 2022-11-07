import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Home} from '../../pages/Home/index.jsx';
import {Layout} from '../Layout/index.jsx';
import {Create} from '../../pages/Create/index.jsx'
import {AboutUs} from '../../pages/AboutUs/index.jsx'
import {Auth} from '../../pages/Auth/index.jsx'

function ProtectedRoute({children}) {
    if (!localStorage.getItem("sb-svjlsppguxnzdbybugnh-auth-token")) {
        return <Navigate to="/" replace={true}/>
    }
    return children
}

export function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Auth/>}/>
                    <Route path="/home" element={
                        <ProtectedRoute>
                            <Home/>
                        </ProtectedRoute>
                    }/>
                    <Route path="/create" element={
                        <ProtectedRoute>
                            <Create/>
                        </ProtectedRoute>
                    }/>
                    <Route path="/aboutUs" element={
                        <ProtectedRoute>
                            <AboutUs/>
                        </ProtectedRoute>
                    }/>
                </Route>
            </Routes>
        </Router>
    );
}