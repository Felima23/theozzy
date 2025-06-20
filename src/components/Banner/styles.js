import styled from 'styled-components'

export const H1 = styled.h1`
    font-weight: 900;
    color: yellow;
    letter-spacing:2px;
    font-family: "Anton", sans-serif;
    text-shadow: 2px 2px 4px #000;
    font-size: clamp(24px, 6vw, 60px); /* Responsivo */
    line-height: 1.2;
    span{
        color:#fff;
    }

    @media (max-width: 480px) {
    text-align:center;
  }
`;