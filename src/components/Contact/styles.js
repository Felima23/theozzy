import styled from 'styled-components'

export const H1 = styled.h1`
    font-weight: 600;
    color: #fff;
    letter-spacing:2px;
    font-family: "Anton", sans-serif;
    font-size:50px;
`;
export const P = styled.p`
    font-weight: 300;
    color: #fff;
    font-family: "Roboto", sans-serif;    
`;
export const PP = styled.p`
    font-weight: 500;
    color: #fff;
    font-family: "Roboto", sans-serif; 
    display:flex;
    text-align:center;
    gap:10px;   
`;

export const H4 = styled.h4`
    font-weight: 600;
    color: #fff;
    letter-spacing:1px;
    font-family: "Roboto", sans-serif;
    font-size:18px;
`;
export const A = styled.a`
    font-weight: 300;
    color: #fff;
    text-decoration:none;
    letter-spacing:1px;
    transition:0.3s;
    font-family: "Roboto", sans-serif;

    &:hover{
    opacity: 0.7;

`;
export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: white;
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;