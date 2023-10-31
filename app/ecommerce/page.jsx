import Slider from "@components/Eommerce/Slider/Slider"
import Header from "@components/Header/Header"
import About from "@components/Home/About/About"
import Contact from "@components/Home/Contact/Contact"
import Team from "@components/Home/Team/Team"

const ecommerce = () => {
    return (
        <>
            <Header 
                style={{
                    backgroundColor: '#484965',
                }} 
                fixBg={10}/>
            <Slider />
            <About />
            <Contact />
        </>
    )
}

export default ecommerce