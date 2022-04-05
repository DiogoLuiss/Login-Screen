
import styled from 'styled-components';
import Background1 from "../../assets/Background1.png"


export const Global = styled.div`
display:flex;
align-items:center;
justify-content:center;
background: url("${Background1}");
background-size: cover;
min-height: 100vh;
height: 100%;

`

export const ContainerMain = styled.div`
margin-top: 30px;

display:flex;
align-items: center;
flex-direction: column;
width: 414px;
height: 100%;
gap: 10px;

justify-content:center;
`;


export const ImgBackground = styled.img`
margin-top: 30px;
width: 300px;
height: 99px;
margin-bottom:35px ;
`






export const ImgArrow = styled.img`

`;


export const UsersLi = styled.li `
display: flex;
justify-content: space-around;
align-items: center;

width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
margin: 18px 0px;
border: none;
outline: none;

font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;


button {
    border: none;
    background: none;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
    }

    &:active {
        opacity: 0.8;
    }
}
`





