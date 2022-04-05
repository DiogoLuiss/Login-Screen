
import styled from "styled-components"



export const ContainerItens = styled.div`
background:linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
width: 100%;
height: 100%;
border-radius: 61px 61px 0px 0px;
padding: 35px;

${({isblur}) =>
       isblur  && `
        background-color: red;
`}


`
