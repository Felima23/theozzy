import { useState } from 'react';
import './index.css'
import { A, Logo,} from './styles';
import logo from "../../assets/IMG/logo.jpg"
import { Link} from 'react-router-dom'

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
            <header>
                <Link to="/"><Logo src={logo} alt="logo da Hamburgueria"/></Link>
                <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>{/* Final div - Menu-Mobile-icon */}

                <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                    <li><A as={Link} to="/">Início</A></li>
                    <li><A as={Link} to="/unidades">Unidades</A></li>
                    <li><A as={Link} to="/#cardapio">Cardápio</A></li>
                    <li><A as={Link} to="/delivery">Delivery</A></li>
                    <li><A as={Link} to="/contato">Contato</A></li>
                </ul>
            </header>
        </>
    );
}

export default Header;

