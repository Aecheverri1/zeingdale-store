import heroImage from '../images/hero-shop-img.png'
import deliveryImage from '../images/delivery-hero-image.png'
import deliveryMan from '../images/delivery-man.png'
import { useState, useEffect } from 'react'


import '../components-style/HeroImage.css'
export default function HeroImage() {

  const images = [heroImage, deliveryImage, deliveryMan]
  const [index, setIndex] = useState(0)
  useEffect(()=> {
    const timer = () => {
      if(index < images.length-1) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }

    const manageChangeImage = setTimeout(timer, 3000)

    return ()=> clearTimeout(manageChangeImage)
  }, [index])


    return (
      <section className='hero-container'>
        <div className='hero-text-container'>
          <p className='hero-title'>Shop smarter, save better!</p>
          <p className='hero-paragraph'>Revamp your style, transform your home! Browse our collection and click to start shopping now.</p>
          <button className='explore-button'>Explore now!</button>
        </div>
        <div className='hero-image-container'>
          <img className='hero-image' src={images[index]}/>
        </div>
      </section>
    )
}