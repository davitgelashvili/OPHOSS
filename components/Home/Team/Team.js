import style from './Team.module.scss'
import Item from './Item'
import data from './data.module'

const Team = () => {
    return (
        <div className={`${style['team']}`}>
            <div className={`${style['team__list']}`}>
                {
                    data && data.map( (item, key) => {
                        return (
                            <Item item={item} key={item.name + key}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Team