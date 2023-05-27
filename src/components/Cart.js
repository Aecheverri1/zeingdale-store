import {BsCartPlusFill} from 'react-icons/bs'
import '../components-style/Cart.css'
export default function Cart(){
  return(
    <div className='cart-container'>
			<BsCartPlusFill className='cart'/>
      <p>Cart</p>
    </div>
	)
}