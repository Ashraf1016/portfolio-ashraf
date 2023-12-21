import { useNavigate } from 'react-router-dom'
import logo from '../components/images/alogo1.png'

export const Navbar = ({val}) => {
    const navigate = useNavigate()
    return(
    <header className='navbar' style={{background:val}}>
        <div className='navbar__title'>
        <img src={logo} alt='logo' width={80} height={80} style={{padding:'20px'}}/>

        </div>
        <div className='navbar__title'>
        <div className='navbar__item' onClick={()=> navigate('/about')}>About Me</div>
        <div className='navbar__item' onClick={()=> navigate('/contact')}>Contact</div>
        <div className='navbar__item'>Help</div>   
            
             </div>
     
    </header>
)}