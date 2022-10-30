import React from 'react';
import { Logo } from '../Logo/index.jsx'
import { Menu } from '../Menu/index.jsx'

export function PageHeader() {
    return (
        <header className="PageHeader">
            <Logo />
            <Menu />
        </header>
    );
}