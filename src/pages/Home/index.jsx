import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './index.css'
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Historia from '../../components/Historia';
import Menu from '../../components/Menu';
import Galeria from '../../components/Galeria';
import Promocoes from '../../components/Promocoes';
import Footer from '../../components/Footer';
import Video from '../../components/Video';



function Home(){
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        // Scroll suave
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
    return(
        <>
            <div className="home-container">
                <Header/>
                <Banner/>
                <Historia/>
                <Video/>
                <Galeria/>
                <Menu/>
                <Promocoes/>
                <Footer/>
            </div>
        </>
    );
}

export default Home;