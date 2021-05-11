import React, { ReactElement } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import laptopImage from '../../assets/laptopMan.png'
import backgroundCity from '../../assets/backgroundCity.png'
import astronaut from '../../assets/7586.png'
import './style.scss'


interface Props {
    
}

export default function Home({}: Props): ReactElement {
    return (
        <div className="home__main">
            <Navbar/>
            <section className="home__main__section">
            <div className="home__main__about">
                <h1 className="title">Hi, I'm Mateusz.</h1>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in
                </span>
                <a>Contact me</a>
            </div>
            <div className="home__main__img__wrapper">
            </div>    
            </section>             
        </div>
    )
}
