import style from './About.module.scss'
import AboutText from './AboutText'
import Team from '../Team/Team'

const About = () => {
    return (
        <section className={`${style['about']}`} >
            <div className='container'>
                <div className='row'>
                    <div className="col-6">
                        <AboutText />
                    </div>
                    <div className="col-6">
                        <Team />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About