import styled from 'styled-components'

export const H1 = styled.h1`
    font-weight: 300;
    color: #fff;
    letter-spacing:2px;
    font-family: "Anton", sans-serif;
    font-size: clamp(40px, 45px, 50px); /* Responsivo */
    text-align:center;
    margin: 30px 50px;
`;

export const Title = styled.h1`
    font-weight: 600;
    color: #fff;
    letter-spacing:3px;
    font-family: "Anton", sans-serif;
    font-size:35px;
    text-shadow: 2px 2px 4px #000;
    font-size: clamp(24px, 6vw, 40px); /* Responsivo */
`;
export const P = styled.p`
    font-weight: 500;
    color: #fff;
    font-size:18px;
    font-family: "Roboto", sans-serif;   
    text-shadow: 1px 1px 2px #000;
    font-size: clamp(1.1rem, 1vw, 1rem);
`;

export const IMG = styled.img`
   width: 100%;
  height: 100%;
  object-fit: cover;
`;