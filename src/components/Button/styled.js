import styled from "styled-components"

import {Link} from "react-router-dom"




export const ContainerButtons = styled(Link)`
color:white;
margin-top: 100px; 
width: 100%;
height: 74px;
background: ${  rest => rest.IsBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'  };
border-radius: 14px;
font-weight: 700;
display: flex;
flex-direction: row;
align-items: center;
justify-content:center; 
gap: 15px;
text-decoration: none;
border: ${ rest => rest.IsBack   ? "solid 1px white;" : " solid 1px black "};

&:hover{
cursor: pointer;
transition: 0.5s;
opacity: 0.9;

}
&:active{
    opacity: 0.8;
}
`;
