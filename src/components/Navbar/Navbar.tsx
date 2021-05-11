import React, { ReactElement } from 'react'
import './style.scss'

interface Props {
    
}

export default function Navbar({}: Props): ReactElement {
    return (
        <nav className="navbar">
            <h2 className="navbar__header">M•M</h2>
            <ul className="navbar__list">
                <li style={{fontWeight : 500}}>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
