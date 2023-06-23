import Navbar from "./Navbar"
import Searchbar from "./SearchBar"
import HomeLoginButton from "./HomeLoginButton"
import Cart from "./Cart"
import '../components-style/Header.css'

export default function Header() {
  return(
    <header className="header-container">
      <h1>ZINGDALE</h1>
			<Navbar />
      <Searchbar />
      <div className="headerlogin-container">
        <HomeLoginButton/>
        <Cart/>
      </div>
    </header>
  )
}