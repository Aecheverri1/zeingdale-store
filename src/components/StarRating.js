import '../components-style/StarRating.css'
import {AiFillStar} from 'react-icons/ai'

export default function Stars({score}) {
    return (
        <div className='star-rating-container'>
            {[...new Array(5)].map((star, index)=> {
                return index < score ? <AiFillStar key={index} className='filledstar'/> : <AiFillStar key={index} className='outstar'/>
            })
        }
        </div>
    )
}