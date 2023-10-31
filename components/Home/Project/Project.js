import style from './Project.module.scss'
import Item from './Item'
import data from './data.module'

const Project = () => {
    return (
        <section className={`${style['project']}`}>
            <svg style={{top: '70px', stroke: "#e5e7eb", width: '100%', height: 'calc(100% - 70px)', position: 'absolute', zIndex: '-1', webkitMaskImage: 'radial-gradient(100% 100% at right top, #fff, rgb(255 255 255 / 21%))'}} aria-hidden="true">
                <defs><pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M100 200V.5M.5 .5H200" fill="none"></path></pattern></defs>
                <svg fill='#f9fafb' x="50%" y="-1" className="overflow-visible fill-gray-50"><path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokewidthh="0"></path></svg>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"></rect>
            </svg>
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <Item item={data.gio}/>
                        <Item item={data.tender}/>
                    </div>
                    <div className='col-7'>
                        <div className='row'>
                            <div className='col-6'>
                                <Item item={data.onlinetkt}/>
                            </div>
                            <div className='col-6'>
                                <Item item={data.tktscan}/>
                                <Item item={data.itemsphere}/>
                            </div>
                            <div className='col-12'>
                                <Item item={data.brokerapp}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project