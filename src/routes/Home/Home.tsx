import React, { ReactElement } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import laptopImage from '../../assets/laptopMan.jpg'
import './style.scss'


interface Props {
    
}

export default function Home({}: Props): ReactElement {
    return (
        <div>
            <Navbar></Navbar>
            <img src={laptopImage}/>
        </div>
    )
}
