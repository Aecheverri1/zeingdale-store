import { useState } from 'react'
import dron from '../images/dron.jpg'
import headphones from '../images/headphones.jpg'
import vegetables from '../images/vegetables.jpg'
import makeup from '../images/makeup.jpg'
import '../components-style/HomeSlider.css'

export default function HomeSlider() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        {image: dron},
        {image: headphones},
        {image: vegetables},
        {image: makeup}
    ]

    const slideStyle = {
        backgroundImage: `url(${images[currentIndex].image})`,
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    const slideChange = () => {
        if(currentIndex < images.length - 1){
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    setTimeout(slideChange, 3000)

    return (
        <div className='slider-container'>
            <div style={slideStyle}></div>
        </div>
    )
}