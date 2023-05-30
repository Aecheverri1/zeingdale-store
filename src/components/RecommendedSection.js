import useFetch from "../custom-hooks/useFetch"
import ItemCard from "./ItemCard"
import '../components-style/RecommendedComponent.css'

export default function RecommendedSection({baseUrl, category}) {

    const [fetchedData] = useFetch(`${baseUrl}`)

    const products = {
        product1: fetchedData[Math.floor(Math.random() * 20)],
        product2: fetchedData[Math.floor(Math.random() * 20)],
        product3: fetchedData[Math.floor(Math.random() * 20)],
        product4: fetchedData[Math.floor(Math.random() * 20)],
      }

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