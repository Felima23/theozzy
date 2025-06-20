import './index.css'
import { H1, IMG, P, Title } from './styles';
import banner3 from "../../assets/IMG/banner3.jpg"
import unidade from "../../assets/IMG/unidade2.jpg"
import ozzybites from "../../assets/IMG/ozzybites.jpg"
import unidade1 from "../../assets/IMG/unidade1.jpg"

function Historia(){
    return(
        <>
            <H1>BEM-VINDO AO THE OZZY</H1>

            <section className='container-sobre'>
                <div className="bloco-par">
                    <div className="div-img">
                        <IMG src={unidade} alt="" />
                    </div>
                    <div className="div-texto">
                        <Title>NOSSA HISTÓRIA</Title>
                        <div className="div-p">
                            <P>Tudo começou do outro lado do mundo.</P>
                            <P>Durante um intercâmbio na Austrália, um casal brasileiro se apaixonou não só pela cultura local, mas também pelos sabores marcantes dos hambúrgueres que encontraram por lá. Ao voltar para São Paulo, decidiram transformar essa experiência em algo único — nasceu assim a The Ozzy Burger.</P>
                            <P>Mais do que uma hamburgueria, a The Ozzy é um pedaço da Austrália no Brasil. Com um cardápio criativo, que homenageia cidades australianas e surpreende com injeções de cheddar, queijos empanados e as famosas piscininhas de queijo, buscamos oferecer mais do que sabor: oferecemos uma experiência.</P>
                            <P>Hoje, seguimos com o mesmo propósito que nos inspirou no começo — unir qualidade, autenticidade e bons momentos, com aquele toque australiano que só a The Ozzy tem.</P>
                        </div>
                    </div>
                </div>

                <div className="bloco">
                    <div className="div-texto">
                        <Title>NA CONTRA MÃO DAS HAMBURGUERIAS TRADICONAIS</Title>
                        <div className="div-p">
                            <P>Destino certo para quem busca smashburger de verdade, a The Ozzy chegou para quebrar padrões e mostrar que sabor, qualidade, personalidade e preço podem andar juntos. Desde nossa inauguração, nossa missão é oferecer muito mais do que uma refeição — aqui, cada detalhe importa.</P>
                            <P>Trabalhamos com carnes Angus selecionadas, ingredientes frescos e combinações irresistíveis que despertam todos os sentidos. Inspirados na cultura australiana, deixamos de lado o gourmet tradicional para criar algo único: uma experiência descomplicada, surpreendente e cheia de autenticidade.</P>
                            <P>Com um ambiente leve, atendimento acolhedor e um cardápio que conversa com todos os públicos, a The Ozzy não é só uma hamburgueria — é um convite para viver o novo, para saborear o diferente e para descobrir por que somos uma das referências em São Paulo quando o assunto é hambúrguer com alma.</P>
                        </div>
                    </div>
                    <div className="div-img">
                        <IMG src={banner3} alt="" />
                    </div>
                </div>

                <div className="bloco-par">
                    <div className="div-img">
                        <IMG src={ozzybites} alt="" />
                    </div>
                    <div className="div-texto">
                        <Title>DELIVERY COM SABOR DE EXPERIÊNCIA</Title>
                        <div className="div-p">
                            <P>Se a ideia é curtir em casa, a The Ozzy também entrega momentos inesqueciveis. Com nosso delivery rápido e confiável, você garante a mesma explosão de sabores do salão — direto no conforto do seu sofá.</P>
                            <P>E pra deixar tudo ainda mais especial, conheça as Ozzy Bites: uma caixa recheada de delícias com o seu gosto como mini burgers, batatas crocantes, frango empanado... perfeita pra dividir com a galera, familia, maratonar séries ou simplesmente transformar qualquer dia comum em um dia especial.</P>
                            <P>O melhor? Você pode montar do seu jeito! As Ozzy Bites são personalizáveis, permitindo que cada pedido tenha a sua cara — dos acompanhamentos ao tipo de burger.</P>
                            <P>Pediu, chegou. Da nossa chapa pra sua mesa, com todo o cuidado, qualidade e aquele toque australiano que só a The Ozzy tem.</P>
                        </div>
                    </div>
                </div>

                <div className="bloco">
                    <div className="div-texto">
                        <Title>UM ROLÊ QUE VALE A PENA</Title>
                        <div className="div-p">
                            <P>A The Ozzy não é só sobre smashburger — é sobre criar memórias. Nosso espaço foi pensado pra quem curte uma boa refeição em um ambiente descolado, com personalidade e aquele jeitão australiano que a gente trouxe de lá. Aqui, a vibe é relax, a trilha é boa e cada detalhe convida você a aproveitar o momento.</P>
                            <P>Seja um almoço rápido, uma noite com os amigos ou até um encontro mais especial, a The Ozzy se adapta ao seu ritmo. Não importa se você vem pela primeira vez ou se já é de casa, o clima acolhedor e autêntico faz cada visita ser única.</P>
                            <P>Nosso atendimento é direto, descontraído e sempre atencioso. A gente acredita que servir bem é mais do que trazer o pedido certo: é fazer você se sentir à vontade. Sem frescura, mas com aquele cuidado que só quem ama o que faz consegue oferecer.</P>
                            <P>Tudo isso combinado com um cardápio de respeito, preços justos e uma experiência completa. Comer bem é só o começo — na The Ozzy, a gente quer que cada visita seja uma lembrança boa. Do seu jeito, no seu tempo, com o seu gosto.</P>
                        </div>
                    </div>
                    <div className="div-img">
                        <IMG src={unidade1} alt="" />
                    </div>
                </div>
            </section>

        </>
    );
}

export default Historia;

