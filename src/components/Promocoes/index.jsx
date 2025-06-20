import './index.css'
import { P, Title } from './styles';
import promo1 from "../../assets/IMG/promo1.jpg"
import promo2 from "../../assets/IMG/promo2.jpg"
import promo3 from "../../assets/IMG/promo3.jpg"

function Promocoes(){
    return(
        <>
            <section className='section-promo'>
                <div className="txt-promo">
                    <Title>EXPERIMENTE ANTES QUE ACABE</Title>
                    <P>Promoções limitadas e novidades exclusivas da The Ozzy. Corre para aproveitar...!</P>
                </div>

                <div className="caixas-promo">
                    <div className="box-promo">
                        <img src={promo1} alt="Promoção the ozzy" />
                    </div>
                    <div className="box-promo">
                        <img src={promo2} alt="Promoção the ozzy" />
                    </div>
                    <div className="box-promo">
                        <img src={promo3} alt="Promoção the ozzy" />
                    </div>
                </div>

            </section>

        </>
    );
}

export default Promocoes;