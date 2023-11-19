import './icon.css'
import { FaUtensils,FaShoppingBag, FaCoffee, FaPalette, FaBroadcastTower, FaTheaterMasks, FaBed,FaBriefcase} from 'react-icons/fa'
const Icon=() => {
    return(
        <div className="card">
        
        <div className='cardinside'>
            <FaShoppingBag className="icons" size={450}/>
            <h1>Shop</h1>
        </div>
        <div className='cardinside'>
            <FaCoffee size={450} className="icons"/>
            <h1>Coffee Shop</h1>
        </div>
        
        <div className='cardinside'>
            <FaPalette size={450} className="icons"/>
            <h1>Art Museum</h1>
        </div>
       <div className='cardinside'>
        <FaBroadcastTower size={450}className="icons" />
        <h1>Media</h1>
       </div>
          
        
        <div className='cardinside'>
            <FaUtensils size={450} className="icons"/>
            <h1>Restraunts</h1>
        </div>
         <div className='cardinside'>
            <FaTheaterMasks size={450} className="icons"/>
             <h1>Theather</h1>     
         </div>
         <div className='cardinside'>
            <FaBed size={450} className="icons"/>
           
            <h1>Hotel</h1>
         </div>
         <div className='cardinside'>
            <FaBriefcase size={450} className="icons" />
            <h1>Meeting Rooms</h1>
         </div>
        </div >
    )
}
export default Icon