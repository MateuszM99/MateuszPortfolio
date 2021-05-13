import React, { ReactElement } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import github from '../../assets/git.png'
import linkedin from '../../assets/linkIm.png'
import './style.scss'


interface Props {
    
}

export default function Home({}: Props): ReactElement {
    return (
        <div className="home__main">
            <Navbar/>
            <section className="home__main__section">
                <div className="home__main__about">
                    <h2>Hi, my name is Mateusz</h2>
                    <h1>I am a Fullstack Developer.</h1>
                    <span>
                        <h2>Welcome to my website</h2>
                        <a>See my work</a>
                    </span>
                </div>
                <div className="home__main__img__wrapper">
                </div>
            </section>     
            <span style={{display : 'flex',justifyContent : 'flex-start',marginLeft: '100px'}}>
            <img src={github} className="icon" />     
            <img src={linkedin} className="icon"/>   
            </span>
        </div>
    )
}
