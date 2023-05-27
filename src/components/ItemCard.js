import Stars from './StarRating'
import AddItemBtn from './AddItemBtn'
import '../components-style/ItemCard.css'

export default function ItemCard({cardInfo}) {
  return (
    <article className='product-card-container'>
      <div className='card-image'>
        <img className='product-img' src={cardInfo?.image} alt='Item'/>
      </div>
      <div className='title-container'>
        <h2 className='item-title'>{cardInfo?.title}</h2>
      </div>
      <div className='price-review-container'>
          <p className='price'>${cardInfo?.price}</p>
          <div className='review-container'>
            <Stars score={Math.round(cardInfo?.rating.rate)}/>
            <p className='vote-count'>({cardInfo?.rating.count})</p>
          </div>
      </div>
      <AddItemBtn/>
    </article>
    )
}