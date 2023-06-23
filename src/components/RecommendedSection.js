import ItemCard from "./ItemCard"
import '../components-style/RecommendedComponent.css'

export default function RecommendedSection({products}) {

    return (
        <section className="recommended-section">
            <h2 className="recommended-section-title">You may like</h2>

            <section className="jewelery-container">
            <ItemCard cardInfo={products.product1}/>
            <ItemCard cardInfo={products.product2}/>
            <ItemCard cardInfo={products.product3}/>
            <ItemCard cardInfo={products.product4}/>
    </section>
        </section>

    )
}