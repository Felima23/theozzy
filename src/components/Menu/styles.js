import styled from 'styled-components'

export const H1 = styled.h1`
    font-weight: 300;
    color: #fff;
    letter-spacing:2px;
    font-family: "Anton", sans-serif;
    font-size: clamp(40px, 45px, 50px); /* Responsivo */
    text-align:center;
    margin-bottom:50px;
`;
export const A = styled.a`
    font-weight: 300;
    font-size:28px;
    color: #fff;
    text-decoration:none;
    letter-spacing:1px;
    transition:0.3s;
    font-family: "Anton", sans-serif;
    cursor:pointer;

    &:hover{
    opacity: 0.7;
`;

export const H3 = styled.h3`
    font-weight: 900;
    font-size:22px;
    color: #FFFFFF;
    letter-spacing:1px;
    font-family: "Anton", sans-serif;
    text-shadow:1px 2px 3px #000000;
`;
export const P = styled.p`
    font-weight: 900;
    color: #FFFFFF;
    font-size:15px;
    font-family: "Roboto", sans-serif;
    text-shadow:1px 2px 3px #000;
`;
export const SPAN = styled.span`
font-family: "Anton", sans-serif;
color:#FFFFFF;
font-size:15px;
font-weight: 300;
letter-spacing:1px;
text-shadow:1px 2px 3px #000;
`;

export const PP = styled.p`
    font-weight: 900;
    color: #FFFFFF;
    font-size:15px;
    font-family: "Roboto", sans-serif;
    width:95%;
`;