import styled from 'styled-components'

export const IMG = styled.img`
    width: 300px;
    height:400px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s;
    cursor:pointer;

    &:hover{
    transform: scale(1.05);
    }
`;
export const H1 = styled.h1`
    font-weight: 300;
    color: #fff;
    letter-spacing:2px;
    font-family: "Anton", sans-serif;
    font-size: clamp(40px, 45px, 50px); /* Responsivo */
    text-align:center;
    margin:50px 10px;
`;

