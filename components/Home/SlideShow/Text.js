import CallBtn from '@components/Header/CallBtn'
import style from './SlideShow.module.scss'

const Text = () => {
    return (
        <div className={`${style['slideshow__text']}`}>
            <h1>
            Do have idea?
            </h1>
            <h2>
            Are You Startuper?
            </h2>
            <CallBtn />
        </div>
    )
}

export default Text