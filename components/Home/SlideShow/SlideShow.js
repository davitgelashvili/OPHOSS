import style from './SlideShow.module.scss'
import Line from './Line'
import Text from './Text'

const SlideShow = () => {

    return (
        <section id='slideshow' className={`${style['slideshow']}`}>
            <div className='container' style={{height: '100%'}}>
                <div className={`${style['slideshow__content']}`}>
                    <Line />
                    <Text />
                </div>
            </div>
        </section>
    )
}

export default SlideShow