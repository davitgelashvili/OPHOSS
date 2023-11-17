"use client"

import style from './Slider.module.scss'
import cover from './../../../public/assets/ecommerce/img/gallery/hero.png'
import Image from 'next/image'

const Slider = () => {

    return (
        <section className={`${style['slider']}`}>
            <div className={`${style['bg']}`} style={{backgroundPosition:'top right',backgroundSize:'contain'}}></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className={`${style['text']}`}>
                            <h1 className={`${style['title']}`}>
                                შექმენი შენზე მორგებული ელექტრონული კომერციის ვებსაიტი.
                            </h1>
                        </div>
                    </div>
                    <div className='col-6'>
                        <figure className={`${style['cover']}`}>
                            <Image src={cover} width={0} height={0} alt='cover' />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider