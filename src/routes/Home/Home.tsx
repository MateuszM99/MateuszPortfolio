import React, { ReactElement } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import laptopImage from '../../assets/laptopMan.png'
import './style.scss'


interface Props {
    
}

export default function Home({}: Props): ReactElement {
    return (
        <div>
            <Navbar/>
            <div>
                <h1 className="full">Fullstack Developer.</h1>
            </div>
            <Footer/>
        </div>
    )
}
