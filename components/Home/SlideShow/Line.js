import style from './SlideShow.module.scss'

const Line = () => {
    return (
        <div className={`${style['slideshow__line']}`}>
            <div className={`${style['slideshow__line--diagonal']}`}></div>
        </div>
    )
}

export default Line