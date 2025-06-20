import './index.css'
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

function Contato(){
    return(
        <>
            <div className="contato-container">
                <Header/>
                <Contact/>
                <Footer/>
            </div>
        </>
    );
}

export default Contato;

