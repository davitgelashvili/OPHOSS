"use client"

import style from './Contact.module.scss'
import { LiaFacebookSquare, LiaLinkedin, LiaInstagram, LiaGitSquare, LiaDribbbleSquare, LiaTwitterSquare } from 'react-icons/lia'
import { CiInstagram } from 'react-icons/ci'
import Link from 'next/link'

const Contact = () => {
    return (
        <section className={`${style['contact']}`} >
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h1>LOCATION</h1>
                        <p>Tbilisi, Georgia</p>
                    </div>
                    <div className="col-4">
                        <h1>CONTACT</h1>
                        <p>(995) 591 111 996</p>
                        <p>info@ophoss.digital</p>
                    </div>
                    <div className="col-4">
                        <span className={`${style['contact-soc']}`}>
                            <Link href={'https://www.facebook.com/ophoss.digital'} target='_black'>
                                <LiaFacebookSquare />
                            </Link>
                        </span>
                        <span className={`${style['contact-soc']}`}>
                            <Link href={'https://www.linkedin.com/company/ophoss/'}  target='_black'> 
                                <LiaLinkedin />
                            </Link>
                        </span>
                        {/* <span>
                            <Link href={''}>
                                <LiaInstagram />
                            </Link>
                        </span>
                        <span>
                            <Link href={''}>
                                <CiInstagram />
                            </Link>
                        </span>
                        <span>
                            <Link href={''}>
                                <LiaGitSquare />
                            </Link>
                        </span>
                        <span>
                            <Link href={''}>
                                <LiaDribbbleSquare />
                            </Link>
                        </span>
                        <span>
                            <Link href={''}>
                                <LiaTwitterSquare />
                            </Link>
                        </span> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact