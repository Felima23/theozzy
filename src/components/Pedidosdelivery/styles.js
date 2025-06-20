import styled from 'styled-components'

export const TITLE = styled.h1`
    font-weight:600;
    color: #fff;
    letter-spacing:3px;
    font-family: "Anton", sans-serif;
    font-size:50px;
`;
export const P = styled.p`
    font-weight: 300;
    color: #fff;
    font-family: "Roboto", sans-serif;   
    font-size:17px; 
`;

export const IMGAPP = styled.img`
    cursor:pointer;
    transition: all 0.3s ease;

    &:hover{
    transform: scale(1.1);
    }
`;
export const IMGOMER = styled.img`
    cursor:pointer;
    transition: all 0.3s ease;
    padding-bottom:20px;

    &:hover{
    transform: scale(1.1);
    }
`;

export const IMGBANNER = styled.img`
    width:100%;
    height:100%;
    border-radius:15px;
    background-size: cover ;
    background-position: center;
    cursor:pointer;
    transition:all 0.3s ease;

    &:hover{
    transform: scale(1.05);
    }
`;