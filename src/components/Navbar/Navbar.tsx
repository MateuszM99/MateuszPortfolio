import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Navbar({}: Props): ReactElement {
    return (
        <nav>
            <h3>Mateusz Młodochowski</h3>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </nav>
    )
}
