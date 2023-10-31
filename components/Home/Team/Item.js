import style from './Team.module.scss'

const Item = ({item}) => {
    return (
        <div className={`${style['team__item']}`}>
            <div className={`${style['team__item--cover']}`}>
                <div style={{ backgroundImage: `url(${item.img})`}} className={`${style['team__item--img']}`}></div>
            </div>
            <h2 className={`${style['team__item--title']}`}>
                {item.name}
            </h2>
            <p className={`${style['team__item--position']}`}>
                {item.position}
            </p>
        </div>
    )
}

export default Item