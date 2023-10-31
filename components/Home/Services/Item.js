import style from './Services.module.scss'

const Item = ({item}) => {
    return (
        <>
        {
            item && (
                <div className={`${style['services__item']}`} >
                    <div className={`${style['services__item--title']}`}>
                        <h1 className={`${style['services__item--title_text']}`}>
                            {item.title}
                        </h1>
                    </div>
                    <div className={`${style['services__item--desc']}`}>
                        {item.body} 
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Item