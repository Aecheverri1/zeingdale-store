import AddItemBtn from './AddItemBtn'
import '../components-style/ExclusiveOffer.css'

export default function ExclusiveOffer() {
  return (
    <section >
      <article className='exclusive-offer-container'>
        <div className='offer-description-container'>
          <h2 className='product-offer-title'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
          <div className='offer-price-container'>
            <p>109.95</p>
            <s>{109.95 *2}</s>
          </div>
          <p className='product-offer-description'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
          <AddItemBtn/>
        </div>
        <div className='offer-image-container'>
          <img className='product-offer-image' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'/>       
        </div>
      </article>

    </section>
    )
}