import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import RecommendedSection from "../components/RecommendedSection";
import ExclusiveOffer from "../components/ExclusiveOffer";
import useFetch from "../custom-hooks/useFetch";
import '../pages-styles/HomePage.css'

export default function HomePage({ apiUrl }) {
  
  const [fetchedData] = useFetch(`${apiUrl}`)

    const products = {
        product1: fetchedData[0],
        product2: fetchedData[1],
        product3: fetchedData[2],
        product4: fetchedData[3]
      }

  return (
    <div className="body">
        <header>
          <Header/>
        </header>
        <main>
          <HeroImage/>
          <RecommendedSection products={products}/>
          <div className="offer-container">
            <ExclusiveOffer url={apiUrl} productIndex={Math.floor(Math.random() * 20)}/>
            <ExclusiveOffer url={apiUrl} productIndex={Math.floor(Math.random() * 20)}/>
          </div>
        </main>
    </div>

  )
}