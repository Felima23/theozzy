import './index.css'
import unidade1 from "../../assets/IMG/unidade1.jpg"
import unidade2 from "../../assets/IMG/unidade2.jpg"
import { BUTTON, H1, IMG, P, PP, PPP, SearchButton, TITLE } from './styles';
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FiSearch } from 'react-icons/fi';

function Unidade(){
    return(
        <>

            <div className="texto">
                <TITLE>ENCONTRE O THE OZZY MAIS<br />PRÓXIMO DE VOCÊ</TITLE>
                <div className="search-box">
                    <input type="text" placeholder="Digite sua região ou Cidade" />
                    <SearchButton><FiSearch /></SearchButton>
                </div>
            </div>



            <section className='unidade-section'>
                <div className="unidade-cont">

                    <div className="unidade-card">
                        <IMG src={unidade1} alt="" />
                        <div className="div-title">
                            <H1>PQ SÃO DOMINGOS</H1>
                        </div>
                        <div className="unidade-content">
                            <PPP><CiLocationOn size={25}/>Rua Brigadeiro Henrique Fontenelle 601. Pq São Domingos – São Paulo/SP</PPP>
                            <PP><IoMdTime />Horário Salão:</PP>
                            <P>Seg, Qua e Qui: 11:30 às 00:00h <br/>Ter: 11:00 às 00:00h<br />Sext e Sáb: 11:30 ás 03:00h<br />Dom: 11:30 às 23h30h</P>
                            <PP><IoMdTime />Horário Delivery:</PP>
                            <P>Seg a Qui: 11h30 às 23h30 <br />Sex a Sáb: 11:30h ás 03:00h <br />Dom: 11h30 às 23h00</P>
                        </div>
                        <div className="div-buttons">
                            <a href="https://maps.app.goo.gl/6q5ei4rRBjtFjBAG7" target='_blank'><BUTTON>Ver rota</BUTTON></a>
                        </div>
                    </div>

                    <div className="unidade-card">
                        <IMG src={unidade2} alt=""/>
                        <div className="div-title">
                            <H1>VILA ANÁSTACIO</H1>
                        </div>
                        <div className="unidade-content">
                            <PPP><CiLocationOn size={25}/>Rua Fortunato Ferraz 768. Vila Anastácio – São Paulo/SP</PPP>
                            <PP><IoMdTime />Horário Salão:</PP>
                            <P>Seg, Qua e Qui: 11:30 às 00:00h <br/>Ter: 11:00 às 00:00h<br />Sext e Sáb: 11:30 ás 03:00h<br />Dom: 11:30 às 23h30h</P>
                            <PP><IoMdTime />Horário Delivery:</PP>
                            <P>Seg a Qui: 11h30 às 23h30 <br />Sex a Sáb: 11:30h ás 03:00h <br />Dom: 11h30 às 23h00</P>
                        </div>
                        <div className="div-buttons">
                            <a href="https://maps.app.goo.gl/rfL5NZAhARtTCYEJ7" target='_blank'><BUTTON>Ver rota</BUTTON></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Unidade;
