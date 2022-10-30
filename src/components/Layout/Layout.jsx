import React from 'react';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
