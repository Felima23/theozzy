import styled from 'styled-components'

export const H1 = styled.h1`
    font-weight: 900;
    color: yellow;
    letter-spacing:3px;
    font-family: "Anton", sans-serif;
    text-shadow: 2px 2px 4px #000;
    font-size: clamp(1.9rem, 8vw, 5rem); /* ajusta conforme a largura da tela */
    span{
        color:#fff;
    }
`;