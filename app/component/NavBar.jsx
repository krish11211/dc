
'use client'
import { showConnect , userSession } from '@stacks/connect';
import { AppConfig, UserSession } from '@stacks/connect';
import './NavBar.css'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import Bicchi from './Bicchi'
const NavBar = () => {
    const router =useRouter();
    const navigate = (item)=>{
        router.push(item)
    }
    const connect = () =>{
        showConnect({
            userSession, // `userSession` from previous step, to access storage
            appDetails: {
              name: 'Tokyo  torch',
              icon:'',
            },
            onFinish: () => {
              window.location.reload(); // WHEN user confirms pop-up
            },
            onCancel: () => {
              console.log('oops'); // WHEN user cancels/closes pop-up
            },
          });
    }

    return(
        <div className="container">
           <div > 
                <div ><Link href="/"><img src='dao.jpg' className='container-image'/></Link></div>
                
                <div ><Link href="/about" className='mem'>About us</Link></div>
                <div><Link href="/proposal"  className='pro'>Contact</Link></div>
                
            </div>
            <div >
                <button onClick={()=>{connect()}}>Wallet</button>
            </div>
        </div>
    )
}
export default NavBar