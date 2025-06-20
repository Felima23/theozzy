import './index.css'
import logo from "../../assets/IMG/logo.jpg"
import ifood from "../../assets/IMG/ifood-43.svg"
import goomer from "../../assets/IMG/goomer-seeklogo.svg"
import { A, H1, H4, Logo, P } from './styles';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <>
            <footer className='footer'>
                <div className="footer-txt">
                <Link to="/"><Logo src={logo} alt="logo the ozzy" /></Link>
                <H1>THE OZZY, O MELHOR SMASHBURGER DO BRASIL</H1>
                <P>Sabor de verdade, na vibe certa. O smashburguer raiz que chegou direto da terra dos cangurus pra virar seu favorito. Leve, autêntico e com aquele preço camarada. Esse é o estilo The Ozzy!</P>
                </div>

                    <div className="footer-links">
                        <H4>INSTITUCIONAL</H4>
                        <ul>
                            <li><A as={Link} to="/">Início</A></li>
                            <li><A as={Link} to="/unidades">Unidades</A></li>
                            <li><A as={Link} to="/#cardapio">Cardápio</A></li>
                            <li><A as={Link} to="/delivery">Delivery</A></li>
                            <li><A as={Link} to="/contato">Contato</A></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <H4>NOSSAS REDES</H4>
                        <div className="icons">
                            <A href="https://www.instagram.com/theozzyburger?utm_source=ig_web_button_share_sheet&igsh=MTR0d3Jkcm4xM3BvYg==" target='_blank'><FaInstagram size={23}/></A>
                            <A href="https://www.facebook.com/theozzyburger/?locale=pt_BR" target='_blank'><FaFacebookF size={23} /></A>
                            <A href="https://api.whatsapp.com/send?phone=551123713409&text=" target='_blank'><FaWhatsapp size={23} /></A>
                        </div>
                    </div>

                    <div className="footer-apps">
                        <H4>Faça seu pedido pelo App</H4>
                        <div className="app-icons">
                            <a href="https://www.ifood.com.br/delivery/sao-paulo-sp/the-ozzy-burger-parque-sao-domingos-parque-sao-domingos/eef8e540-ee93-4e2b-bfb7-5e9db693836b?srsltid=AfmBOoqXGh39FGlJQwvkY2MhUcnYRzk9jm3GXW5ElTxfGaUSztkhCOt8" target='_blank'><img src={ifood} alt="iFood" width={100} height={100} /></a>
                            <a href="https://the-ozzy-burger.goomer.app/" target='_blank'><img className='goomer' src={goomer} alt="Goomer" width={100} height={100} /></a>
                        </div>
                    </div>
            </footer>

            <div className="copy">
                <P>© 2025 The Ozzy. Todos os direitos reservados.</P>
                <P>@theozzyburger</P>
            </div>
        </>
    );
}

export default Footer;