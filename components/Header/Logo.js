import Style from './Header.module.scss'

const Logo = () => {
    return (
        <div className={`${Style['header__logo']}`}>
            <h1 className='d-flex align-items-center'>
                OPHOSS <span>•</span> DIGITAL
            </h1>
        </div>
    )
}

export default Logo