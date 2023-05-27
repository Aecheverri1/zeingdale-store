import useFetch from "../custom-hooks/useFetch"
import ItemCard from "./ItemCard"
import '../components-style/RecommendedComponent.css'

export default function RecommendedSection({baseUrl, category}) {

    const [fetchedData] = useFetch(`${baseUrl}${category}`)

    const products = {
        product1: fetchedData[0],
        product2: fetchedData[1],
        product3: fetchedData[2],
        product4: fetchedData[3],
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