"use client"

import React, { useEffect, useRef, useState } from 'react';
import Style from './Header.module.scss'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Logo from './Logo';
import Menu from './Menu';
import CallBtn from './CallBtn';


const Header = ({fixBg, style}) => {
    const [changeBg, setChangeBg] = useState(false)

    useEffect(()=>{
        const slideShowHeight = document.querySelector('#slideshow')
        window.addEventListener('scroll', (e)=> {
            if(
                window.pageYOffset > (fixBg ? fixBg : (slideShowHeight.clientHeight - 70) )
            ) {
                setChangeBg(true)
            } else {
                setChangeBg(false)
            }
            
        });
    },[])
    return (
    <header 
        className={`${Style['header']} d-flex align-items-center`}
        style={changeBg ? {backgroundColor: '#f6f1ed'} : null }
        >
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-10 d-flex'>
                    <Logo />
                    <Menu />
                </div>
                <div className='col-2 d-flex justify-content-end'>
                    <CallBtn />
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header