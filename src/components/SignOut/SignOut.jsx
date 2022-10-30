import React from 'react';
import {useNavigate} from 'react-router-dom';
import supabase from "../../config/supabaseClient.jsx";


export function SignOut() {
    const navigate = useNavigate()

    function handleClickSignOut(e) {
        e.preventDefault();
        const result = confirm(`Are you sure you want Sign Out?`);
        if (result) {
            alert('You have been signed out');
            supabase.auth.signOut();
            navigate('/')
        }
    }

    return (
        <button
            type="button"
            className="smallTile Menu__button signOutBtn"
            onClick={handleClickSignOut}
        >
            Sign Out
        </button>
    )
}

