import './index.css'
import ifood from "../../assets/IMG/ifood-43.svg"
import goomer from "../../assets/IMG/goomer-seeklogo.svg"
import delivery from "../../assets/IMG/delivery.jpg"
import { IMGAPP, IMGBANNER, IMGOMER, P, TITLE } from './styles';

function Pedidosdelivery(){
    return(
        <>
            <section className='section-delivery'>
                <div className="texto-delivery">
                    <div className="title">
                    <TITLE>THE OZZY NO DELIVERY</TITLE>
                    <P>Peça agora pelo iFood ou pelo site do Goomer.</P>
                    </div>
                    <div className="img-apps">
                        <a href="https://www.ifood.com.br/delivery/sao-paulo-sp/the-ozzy-burger-parque-sao-domingos-parque-sao-domingos/eef8e540-ee93-4e2b-bfb7-5e9db693836b?srsltid=AfmBOort-s0d3jeN0GzFfBJ4f7Z2Nlgoz_jHMr2wJyF--4cY8EdCc47X" target='_blank'><IMGAPP src={ifood} alt="svg-logo-ifood" width={130} height={130} /></a>
                        <a href="https://the-ozzy-burger.goomer.app/" target='_blank'><IMGOMER src={goomer} alt="svg-logo-goomer" width={165}height={165} /></a>
                    </div>
                </div>

                <div className="delivery-banner">
                    <IMGBANNER src={delivery} alt="The ozzy Burger" />
                </div>
            </section>
        </>
    );
}

export default Pedidosdelivery;
