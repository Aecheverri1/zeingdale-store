import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";
import HomeLoginButton from "../components/HomeLoginButton";
import HomeSlider from '../components/HomeSlider'
import RecommendedSection from "../components/RecommendedSection";
import ExclusiveOffer from "../components/ExclusiveOffer";
import useFetch from "../custom-hooks/useFetch";
import '../pages-styles/HomePage.css'

export default function HomePage() {

  const baseUrl = 'https://fakestoreapi.com/products/category/'
  const category = "jewelery"

  
  const [productCategories] = useFetch("https://fakestoreapi.com/products/1")
  console.log(productCategories)

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
          <HomeSlider/>
          <RecommendedSection baseUrl={baseUrl} category={category}/>
          <ExclusiveOffer/>
        </main>
    </div>

  )
}