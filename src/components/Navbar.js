import './Navbar.css';
import { FaHotjar } from "react-icons/fa";
import CardWidget from './CartWidget';
import { FaCartArrowDown } from "react-icons/fa";



function Navbar() {
  return (
    <header className='Navbar'>
        <span className='nav-logo'><FaHotjar/>Viva la Birra</span>
        <div className='nav-items'>
            <a href="/home">Home</a>
            <a href="/productos">Productos</a>
            <a href="/servicio">Servicio</a>
            <a href="/contacto">Contacto</a>
        </div>
        <div className='nav-spac'>
            <div className='bar'></div>
        </div>
        <CardWidget widget='Carrito'><FaCartArrowDown/></CardWidget>
        
        
    </header>
  );
}

export default Navbar;