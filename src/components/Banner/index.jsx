import './index.css'
import { H1} from './styles';

function Banner(){
    return(
        <>
            <section className='sec-banner'>
                <div className="titulos">
                    <H1>THE OZZY, O MELHOR <br /><span>SMASHBURGER</span><br/>DO BRASIL</H1>
                </div>
            </section> 

            <div className="scroll-indicator">
                <span>SCROLL</span>
                <div className="line"></div>
            </div>{/* Final div ( scrool-indicator ) */}
        </>
    );
}

export default Banner;

