import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/index.jsx';
import { Layout } from '../Layout/index.jsx';
import { Create } from '../../pages/Create/index.jsx'
import { AboutUs } from '../../pages/AboutUs/index.jsx'
import { Auth } from '../../pages/Auth/index.jsx'

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Auth />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Route>
            </Routes>
        </Router>
    );
}