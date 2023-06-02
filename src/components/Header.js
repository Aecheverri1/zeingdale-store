import Navbar from "./Navbar"
import Searchbar from "./SearchBar"
import HomeLoginButton from "./HomeLoginButton"
import Cart from "./Cart"

export default function Header() {
  return(
    <>
      <h1>ZINGDALE</h1>
			<Navbar />
      <Searchbar />
      <div className="headerlogin-container">
        <HomeLoginButton/>
        <Cart/>
      </div>
    </>
  )
}