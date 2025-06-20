import "./index.css"
import { A, H1, H3, P, SPAN, PP } from "./styles";
import menuData from "./menuData.json";
import { useState } from "react";

function Menu(){

    const [categoriaAtiva, setCategoriaAtiva] = useState("BURGERS");
    const categorias = ["BURGERS", "COMBOS", "SIDES","OZZY BITES","DESSERTS", "ADICIONAIS", "DRINKS","NOVIDADES DO MÊS"];

// Filtra apenas itens com dados válidos
const itensFiltrados = menuData.filter(item => item.categoria === categoriaAtiva && item.nome && item.precos);

return (
  <>
    <section className="menu-section" id="cardapio">
      <H1>CARDÁPIO</H1>

      <nav className="cardapio-nav">
        {categorias.map(cat => (
          <A
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={categoriaAtiva === cat ? "ativo" : ""}
          >
            {cat}
          </A>
        ))}
      </nav>

      <div className="menu-cardapio">
        {itensFiltrados.map(item => (
          <div className="item" key={item.id}>
            <div className="item-info">
              <H3>{item.nome}</H3>
              <div className="line"></div>
              <div className="item-price">
                {item.precos &&
                  Object.entries(item.precos).map(([tipo, preco]) => (
                    <div className="txt" key={tipo}>
                      <P>{tipo}</P>
                      <SPAN>{preco}</SPAN>
                    </div>
                  ))}
              </div>
            </div>
            {item.descricao && <PP>{item.descricao}</PP>}
          </div>
        ))}
      </div>
    </section>    
    </>
    );
}

export default Menu;

