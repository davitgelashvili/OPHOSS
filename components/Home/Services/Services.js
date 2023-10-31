import style from './Services.module.scss'
import Item from './Item'
import data from './data.module'

const Services = () => {
    return (
        <section className={`${style['services']}`}>
            <svg style={{stroke: "#e5e7eb", width: '100%', height: '100%', position: 'absolute', zIndex: '-1', '-webkitMaskImage': 'radial-gradient(79% 47% at top left, #fff, rgb(255 255 255 / 31%))'}} aria-hidden="true">
                <defs><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M100 200V.5M.5 .5H200" fill="none"></path></pattern></defs>
                <svg fill='#f9fafb' x="50%" y="-1" className="overflow-visible fill-gray-50"><path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokewidthh="0"></path></svg>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
            </svg>
            <div className='container'>
                <div className={`${style['services__head']}`}>
                    <h1 className={`${style['services__head--title']}`}>
                        SERVICES
                    </h1>
                </div>
                <div className={`${style['services__list']}`}>
                    {
                        data && data.map( item => (
                            <Item key={item.title} item={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services