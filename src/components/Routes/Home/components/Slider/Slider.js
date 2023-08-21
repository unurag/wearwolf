import React, { useRef, useState } from "react"
import './components/style.css'

const Slider = () => {

    const slides = [
        {url: 'https://i.ibb.co/BjNvq5T/pika.png', title: 'Pikachu', pretitle: 'Pokemon Gen I', text: 'Pikachu is an Electric-type Pokémon introduced in Generation I. Pikachu are small, chubby, and incredibly cute mouse-like Pokémon. They are almost completely covered by yellow fur.', leftcolor: '#f8d41f', rightcolor: '#f4ecc5'},
        {url: 'https://i.ibb.co/3s6xX4X/blaziken.png', title: 'Blaziken', pretitle: 'Pokemon Gen III', text: 'Blaziken is the Fire/Fighting-type Starter Pokémon of the Hoenn region, introduced in Generation III. Blaziken is a large, bipedal, humanoid bird-like Pokémon that resembles a rooster.', leftcolor: '#f64f37', rightcolor: '#ffebcd'},
        {url: 'https://i.ibb.co/s3HWYpW/zekrom.png', title: 'Zekrom', pretitle: 'Pokemon Gen V', text: 'Zekrom is a Dragon/Electric-type Legendary Pokémon. It is part of the Tao Trio, along with Reshiram and Kyurem. Zekrom is a large, black draconian Pokémon that seems to share its theme with its counterpart, Reshiram. It has piercing red eyes and dark gray to black skin that seems to be armor-like.', leftcolor: '#424242', rightcolor: '#a7bcbb'},
    ]



    const [index, setIndex] = useState(0)
    const imgRef = useRef();

    const goToSlide = (slideIndex) => {
        setIndex(slideIndex) 
        imgRef.current.classList.add('animation--start')
        imgRef.current.classList.remove('animation--end')
        setTimeout(() => {
            imgRef.current.classList.remove('animation--start')
            imgRef.current.classList.add('animation--end')
        }, 800)
    }


    return(
        <div id="slider-wrapper">
        <div className="flex__container flex--pikachu ">
            <div className="flex__item flex__item--left" style={{ background: slides[index].leftcolor }}>
            <div className="flex__content">
                <p className="text--sub">{slides[index].pretitle}</p>
                <h1 className="text--big">{slides[index].title}</h1>
                <p className="text--normal">{slides[index].text}</p>
            </div>
            <p className="text__background">{slides[index].title}</p>
            </div>
            <div className="flex__item flex__item--right" style={{ background: slides[index].rightcolor }}>
                <div className="slider_navi">
                    {slides.map((slide, slideIndex) => (
                        <div className="slider_navi_sub" style={{ background: index === slideIndex ? 'beige' : 'darkgray' }} key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>
                    ))}
                </div>
            </div>
        </div>
        <img className="shirt__img" src={slides[index].url} ref={imgRef} />
        </div>
    )
}

export default Slider