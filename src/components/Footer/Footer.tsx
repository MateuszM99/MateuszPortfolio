import React, { ReactElement, useEffect, useState } from 'react'
import './style.scss'

interface Props {
    
}

export default function Footer({}: Props): ReactElement {

    const [date,setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() =>
            updateClock(),
            1000)
    },[])

    const updateClock = () => {
        setDate(new Date().toLocaleTimeString())
    }

    return (
        <footer className="footer">
            <h2 className="footer__stamp">MM</h2>
            <p>{date}</p>
        </footer>
    )
}
