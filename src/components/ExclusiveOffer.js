import AddItemBtn from './AddItemBtn'
import Stars from '../components/StarRating'
import useFetch from '../custom-hooks/useFetch'
import '../components-style/ExclusiveOffer.css'


export default function ExclusiveOffer({url, productIndex}) {

  const [fetchedData] = useFetch(url)

  return (
    <section >
      <article className='exclusive-offer-container'>
        <div className='offer-description-container'>
          <div className='title-offer-container'>
            <h2 className='product-offer-title'>{fetchedData[productIndex]?.title}</h2>
          </div>
          <div className='offer-price-container'>
            <p>${fetchedData[productIndex]?.price}</p>
            <s>${fetchedData[productIndex]?.price *2}</s>
            <Stars  score={fetchedData[productIndex]?.rating.rate}/>
          </div>
          <p className='product-offer-description'>{fetchedData[productIndex]?.description}</p>
          <AddItemBtn/>
        </div>
        <div className='offer-image-container'>
          <img className='product-offer-image' src={fetchedData[productIndex]?.image} alt='product'/>       
        </div>
      </article>

    </section>
    )
}