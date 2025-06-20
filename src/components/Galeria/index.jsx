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
     const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7];
    return(
        <>  <H1>NOSSA GALERIA</H1>
            <div className="galeria-container">
                <div className="galeria-faixa">
                    {imagens.concat(imagens).map((img, index) => (
                        <IMG key={index} src={img} alt={`Imagem ${index + 1}`} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Galeria;