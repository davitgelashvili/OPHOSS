"use client"

import Header from '@components/Header/Header'
import About from '@components/Home/About/About'
import Contact from '@components/Home/Contact/Contact'
import Project from '@components/Home/Project/Project'
import Services from '@components/Home/Services/Services'
import SlideShow from '@components/Home/SlideShow/SlideShow'
import React, { useEffect } from 'react'

const Home = () => {
    // useEffect(()=>{
    //     setTimeout(() => {
    //         alert('საიტი აწყობის პროცესშია')
    //     }, 500);
    // }, [])
    return (
        <>
            <Header />
            <SlideShow />
            <Project />
            <Services />
            <About />
            <Contact />
        </>
    )
}

export default Home