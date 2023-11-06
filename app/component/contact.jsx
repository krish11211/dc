import Link from 'next/link'
import './contact.css'
import {FaFacebook,FaInstagram,FaTwitter,FaDiscord,FaCircle} from 'react-icons/fa';
const Contact = () => {
    return(
        <div className='contain'>
            <div className='US'>
                <div className='about'><FaCircle size={5} color='silver' className='circle'/>About us</div>
                <div className='propo'><FaCircle size={5} color='silver' className='circle'/>Proposal</div>
            </div>
            <div className='policy'>
                <div ><Link href="policy.txt">Privaicy policy</Link></div>
            </div>
        
        <div className="contact">
            <div>The Dark company</div>
            <div>   E-mail:companydark@gmail.com</div>
            <div>Number:9866010825</div>
            <div className='icons'><a href="https://www.facebook.com/"><FaFacebook size={32} color='silver'/></a>
            <a href="https://www.instagram.com"><FaInstagram size={32} color="silver"/></a>
            <a href="https://www.twitter.com"><FaTwitter size={32} color="silver"/></a>
            <a href="https://www.discord.com"><FaDiscord size={32} color="silver"/></a></div>

        </div>
        </div>
    )
}
export default Contact