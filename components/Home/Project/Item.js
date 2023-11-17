import style from './Project.module.scss'

const Item = ({item}) => {
    return (
        <>
        {
            item && (
                <div 
                    className={`
                        ${style['project__item']}
                    `}
                    style={item.style}
                >
                    <figure className={`${style['project__item--cover']}`}>
                        <img src={item.img} className={`${style['project__item--img']}`} />
                    </figure>
                </div>
            )
        }
        </>
    )
}

export default Item