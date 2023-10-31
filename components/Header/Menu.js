"use client"


import Link from 'next/link'
import Style from './Header.module.scss'

const data = [
    {
        to: '/',
        name: 'Home',
    },
    {
        to: '/ecommerce',
        name: 'E-COMMERCE',
    }
]

const Menu = () => {
    return (
        <ul className={`${Style['header__menu']} d-flex align-items-center`}>
            {
                data && data.map( item => {
                    return (
                        <li className={`${Style['header__menu--item']}`} key={item.name}>
                            <Link 
                                href={item.to} 
                                className={`${Style['header__menu--link']}`}
                                >
                                    {item.name}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Menu