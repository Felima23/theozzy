import styled from 'styled-components'

export const TITLE = styled.h1`
    font-weight:600;
    color: #fff;
    letter-spacing:3px;
    font-family: "Anton", sans-serif;
    font-size:50px;
`;
export const SearchButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
`;




export const IMG = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  padding:10px 10px;
`;

export const H1 = styled.h1`
    font-weight: 600;
    color: #fff;
    letter-spacing:2px;
    font-family: "Anton", sans-serif;
    font-size:30px;
    padding:0px 15px;
`;
export const P = styled.p`
    font-weight: 300;
    color: #fff;
    font-family: "Roboto", sans-serif;   
    font-size:15px; 
`;
export const PP = styled.p`
    font-weight: 300;
    color: #fff;
    font-family: "Roboto", sans-serif;   
    font-size:15px; 
    display:flex;
    align-items: center;
    gap:5px;
`;
export const PPP  = styled.p`
    font-weight: 300;
    color: #fff;
    font-family: "Roboto", sans-serif; 
    font-size:15px;  
    display: flex;
    gap:5px;
`;
export const BUTTON = styled.button`
    width: 80%;
    background-color: #fff;
    color: #000;
    padding: 14px 8px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.4s;
    font-size:15px;

    &:hover {
  background-color: transparent;
  border:1px solid #fff;
  color:#fff;
`;