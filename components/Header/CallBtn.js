"use client"

import Style from './Header.module.scss'
import { IoIosCall } from 'react-icons/io';
import Link from 'next/link';

const CallBtn = () => {
    return (
        <li className={`${Style['header__contact']}`}>
            <Link href={"tel:+995591111996"} className={`${Style['header__contact--btn']}`}>
                <IoIosCall />
                <span>CALL</span>
            </Link>
        </li>
    )
}

export default CallBtn