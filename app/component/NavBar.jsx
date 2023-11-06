import './NavBar.css'

const NavBar = () => {
    return(
        <div className="container">
           <div > 
                <div className='container-image'><img src='dao.jpg'/></div>
                
                <div className='mem'>About us</div>
                <div className='pro'><div>Proposal</div></div>
                
            </div>
            <div>
                <button>wallet</button>
            </div>
        </div>
    )
}
export default NavBar