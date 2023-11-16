"use client"

import Image from 'next/image'
import style from './Work.module.scss'
import icons from './../../../public/assets/img/work/first.svg'
import data from './data.module'

const Work = () => {
    return (
        <section className={`${style['work']}`} >
            <div className='container'> 
                <div className='row'>
                    {data.map((item, key)=>{
                        return (
                            <div className='col-6' key={item.name}>
                                <div className={`${style['item']}`} style={item.style.item}>
                                    <div className={`${style['card']} d-flex align-items-center`} style={item.style.box}>
                                        <div className={`${style['number']}`} >
                                            {`0${key + 1}`}
                                        </div>
                                        {/* <figure className={`${style['cover']} d-flex justify-content-center align-items-center`}>
                                            <svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.4706 12.0684H17.2392C16.8259 12.0684 16.5111 12.4914 16.6587 12.885L18.4001 17.3911C18.4788 17.5879 18.3214 17.8043 18.105 17.7945L15.8814 17.6567C15.783 17.6469 15.6847 17.6961 15.6256 17.7846L13.894 20.2345C13.8055 20.3722 13.6185 20.4214 13.471 20.323L10.9129 18.5816C10.8145 18.5127 10.6768 18.5127 10.5784 18.5816L7.03647 20.9822C6.81018 21.1396 6.50518 20.9232 6.58389 20.6575L7.56776 17.1254C7.60711 16.9779 7.53824 16.8303 7.39066 16.7712L5.51148 16.0038C5.32454 15.9251 5.26551 15.6988 5.39341 15.5414L7.05615 13.495C7.13486 13.3966 7.1447 13.249 7.06599 13.1408L5.6689 11.1238C5.54099 10.9369 5.65906 10.6811 5.89518 10.6614L8.05969 10.4942C8.21711 10.4843 8.34501 10.3466 8.33517 10.1793L8.16792 7.14903C8.15808 6.93258 8.37453 6.77516 8.58114 6.85387L11.2671 7.96564C11.3852 8.01483 11.5229 7.98531 11.6016 7.88693L13.4513 5.82081C13.5989 5.65355 13.8645 5.70274 13.9531 5.89952L15.0648 8.76257C15.2124 9.11676 15.6551 9.24466 15.97 9.00853L20.3187 5.77161C20.8106 5.40758 20.4958 4.62049 19.8858 4.70904L17.0227 5.09274C16.885 5.11241 16.7571 5.03371 16.7079 4.90581L15.2026 1.03921C15.0353 0.635829 14.5139 0.537442 14.2187 0.862118L10.9424 4.41388C10.8539 4.50242 10.726 4.53194 10.6079 4.48275L6.29857 2.66259C5.91486 2.50518 5.4918 2.77082 5.47212 3.19388L5.3147 7.64096C5.30486 7.79838 5.1868 7.91644 5.03922 7.92628L1.10375 8.18209C0.641337 8.2116 0.39537 8.73305 0.651176 9.10692L3.26826 12.9637C3.34697 13.0719 3.33713 13.2195 3.24858 13.3277L0.592144 16.3777C0.3265 16.6827 0.434725 17.1549 0.808594 17.3124L3.85858 18.6307C3.99632 18.6898 4.06519 18.8374 4.02584 18.9751L2.07778 26.5902C1.94004 27.1314 2.55004 27.5446 3.00262 27.2199L10.3226 21.9661C10.421 21.8972 10.5587 21.8873 10.6669 21.9661L14.0022 24.3077C14.2777 24.5044 14.6516 24.4257 14.8385 24.1502L16.9243 20.9527C16.9834 20.8543 17.1014 20.8051 17.2097 20.8248L22.1979 21.4249C22.6012 21.484 23.0046 21.1494 22.857 20.7756L20.7811 15.4037C20.7221 15.2561 20.7811 15.0987 20.9582 15.0101L24.7461 13.2195C25.3069 12.9342 25.1101 12.0684 24.4706 12.0684Z" fill="#8039E9"/>
                                            </svg>
                                        </figure> */}
                                        <h1 className={`${style['title']}`} >{item.name}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={`${style['center']} d-flex align-items-center justify-content-center`}>
                    <p className={`${style['text']}`}>Steps to your idea</p>
                    <div className={`${style['line']}`} ></div>
                </div>
            </div>
        </section>
    )
}

export default Work