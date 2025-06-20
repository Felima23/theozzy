import './index.css'
import { H1, IMG } from './styles';
import imagem1 from "../../assets/IMG/imagem1.jpg"
import imagem2 from "../../assets/IMG/imagem2.jpg"
import imagem3 from "../../assets/IMG/imagem3.jpg"
import imagem4 from "../../assets/IMG/imagem4.jpg"
import imagem5 from "../../assets/IMG/imagem5.jpg"
import imagem6 from "../../assets/IMG/imagem6.jpg"
import imagem7 from "../../assets/IMG/imagem7.jpg"


function Galeria (){
    return(
        <>  <H1>NOSSA GALERIA</H1>
            <div className="galeria-container">
                <div className="galeria-faixa">
                    <IMG src={imagem1} alt="Imagem 1" />
                    <IMG src={imagem2} alt="Imagem 2" />
                    <IMG src={imagem3} alt="Imagem 3" />
                    <IMG src={imagem4} alt="Imagem 4" />
                    <IMG src={imagem5} alt="Imagem 5" />
                    <IMG src={imagem6} alt="Imagem 6" />
                    <IMG src={imagem7} alt="Imagem 7" />
                </div>
            </div>
        </>
    );
}

export default Galeria;