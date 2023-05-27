import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import '../components-style/SearchBar.css'

export default function Searchbar() {
    return (
        <form className="searchbarContainer">
            <input placeholder="Search Product"/>
            <button><HiOutlineMagnifyingGlass/></button>
        </form>
    )
}