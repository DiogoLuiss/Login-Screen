import React from "react";

import { ContainerItens } from "./style"

function div({children,isblur }) {

    return <ContainerItens isblur = {isblur} >{children}</ContainerItens>

}
export default div 