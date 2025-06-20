import './index.css'
import Header from '../../components/Header';
import Unidade from '../../components/Unidade';
import Footer from '../../components/Footer';

function Unidades(){
    return(
        <>
            <div className="unidades-container">
                <Header/>
                <Unidade/>
                <Footer/>
            </div>
        </>
    );
}

export default Unidades;
