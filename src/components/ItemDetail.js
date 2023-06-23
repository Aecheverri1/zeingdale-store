import Stars from "./StarRating"
import Header from './Header'
import '../components-style/ItemDetail.css'

export default function ItemDetail() {
  return(
    <section className="item-page">
      <Header/>
      <article className="item-detail-view">
      <div className="item-img-container">
        <img className="item-view-img" src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"/>
      </div>
      <div className="detail-description-container">
        <p className="detail-description-title">MBJ Women's Solid Short Sleeve Boat Neck V</p>
        <div className="rating-container">
          <Stars score={4}/>
          <p>(230)</p>
        </div>
        <p className="detail-description-subtitle">Description</p>
        <p className="detail-description-text">95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem.</p>
        <div className="description-price-container">
          <p className="detail-description-price">USD $9.85</p>
          <p className="detail-description-duty">Duty free</p>
        </div>
        <form className="detail-description-offercode">
          <input className="offercode-input"/>
          <button className="offercode-button">Let's go</button>
        </form>
      </div>
    </article>   
    </section>   
  )
}