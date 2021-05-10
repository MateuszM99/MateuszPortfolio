import React, { ReactElement } from 'react'
import './style.scss'

interface Props {
    
}

export default function Navbar({}: Props): ReactElement {
    return (
        <nav className="navbar">
            <h2 className="navbar__header">Mateusz Młodochowski</h2>
            <ul className="navbar__list">
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </nav>
    )
}
