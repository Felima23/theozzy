import './index.css'
import { A, Button, H1, H4, P, PP } from './styles';
import { FaInstagram, FaFacebookF,FaTiktok, FaWhatsapp } from "react-icons/fa";
import banner2 from "../../assets/IMG/banner2.jpg"

function Contact(){
    return(
        <>
            <section className='section-contact'>
                <div className="contact-info">
                    <div className="title">
                    <H1>CONTATO THE OZZY</H1>
                    <P>Utilize o formulário abaixo para nos enviar uma mensagem</P>
                    </div>

                    <div className="sac">
                    <H4>Sac</H4>
                    <A href="mailto:sac@theozzyburger.com">sac@theozzyburger.com</A>
                    </div>

                    <div className="redes">
                    <H4>Siga nossas redes sociais</H4>
                    <div className="redesocial-icon">
                        <A href="https://www.instagram.com/theozzyburger?utm_source=ig_web_button_share_sheet&igsh=MTR0d3Jkcm4xM3BvYg==" target='_blank'><FaInstagram size={25}/></A>
                        <A href="https://www.facebook.com/theozzyburger/?locale=pt_BR" target='_blank'><FaFacebookF size={25} /></A>
                        <A href="https://www.tiktok.com/@ondeiremsp_?lang=pt-BR" target='_blank'><FaTiktok size={25}/></A>
                    </div>
                    </div>
                </div>

                <div className="formulario">
                    <form action="">
                        <input type="text" placeholder="Nome" required />
                        <input type="email" placeholder="E-mail" required />
                        <input type="text" placeholder="Assunto" required />
                        <textarea placeholder="Mensagem" required></textarea>
                        <input type="file" />
                        <Button type="submit">Enviar</Button>
                    </form>
                </div>

            </section>

            <section className='section-contact'>
                <div className="contact-info">
                    <div className="title">
                    <H1>VENHA FAZER PARTE DESSA EQUIPE!</H1>
                    <a href="https://api.whatsapp.com/send?phone=551123713409&text=" target='_blank'><PP><FaWhatsapp size={25} />(11) 2371-3409</PP></a>
                    </div>
                </div>

                <div className="formulario">
                    <form action="">
                        <input type="text" placeholder="Nome" required />
                        <input type="email" placeholder="E-mail" required />
                        <input type="text" placeholder="Assunto" required />
                        <textarea placeholder="Mensagem" required></textarea>
                        <input type="file" />
                        <Button type="submit">Enviar</Button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;

