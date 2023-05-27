import { FaUser } from 'react-icons/fa'
import '../components-style/HomeLoginButton.css'

export default function HomeLoginButton() {
    return (
        <div className='loginbtn-container'>
            <FaUser className='user-icon'/>
            <p>User</p>
        </div>
    )
}