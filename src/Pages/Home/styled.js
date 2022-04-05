
import styled from 'styled-components';
import Background from "../../assets/Background.png"


export const Global = styled.div`
display:flex;
align-items:center;
justify-content:center;
background: url("${Background}");
background-size: cover ;
min-height: 100vh;
height: 100%;
`

export const ContainerMain = styled.div`
margin-top: 30px;
height: 100vh;
display:flex;
align-items: center; 
flex-direction: column;
height: 800px;
gap: 10px;

justify-content:center;
`;


export const ImgBackground = styled.img`
margin-top: 30px;
width: 328px;
height: 176px;
margin-bottom:35px ;
`

export const LabelInput = styled.label`
margin-top: 30px;
display: flex;
color: white;
flex-direction: column;
font-weight: 800;
display: flex; 
margin-left: 15px;

`;


export const Input = styled.input`
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: white;
padding-left: 25px;
margin-left: -20px;
outline: none;
`






export const ImgArrow = styled.img`

`
 export const Users = styled.li ``





