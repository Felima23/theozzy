import './index.css'
import Header from '../../components/Header';
import Pedidosdelivery from '../../components/Pedidosdelivery';
import Promocoes from '../../components/Promocoes';
import Footer from '../../components/Footer';

function Delivery(){
    return(
        <>
            <div className="delivery-container">
                <Header/>
                <Pedidosdelivery/>
                <Promocoes/>
                <Footer/>
            </div>
        </>
    );
}

export default Delivery;
