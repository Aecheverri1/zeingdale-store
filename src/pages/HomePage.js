import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";
import HomeLoginButton from "../components/HomeLoginButton";
import HeroImage from "../components/HeroImage";
import RecommendedSection from "../components/RecommendedSection";
import ExclusiveOffer from "../components/ExclusiveOffer";
import '../pages-styles/HomePage.css'

export default function HomePage() {

  const baseUrl = 'https://fakestoreapi.com/products'
  const category = "/category/jewelery"

  return (
    <div className="body">
        <header>
      <h1>ZINGDALE</h1>
			<Navbar />
      <SearchBar />
      <div className="headerlogin-container">
        <HomeLoginButton/>
        <Cart/>
      </div>
        </header>
        <main>
          <HeroImage/>
          <RecommendedSection baseUrl={baseUrl}/>
          <div className="offer-container">
            <ExclusiveOffer url={baseUrl} productIndex={Math.floor(Math.random() * 20)}/>
            <ExclusiveOffer url={baseUrl} productIndex={Math.floor(Math.random() * 20)}/>
          </div>
        </main>
    </div>

  )
}