import React from "react";

import {ContainerButtons as Button} from "./styled"

function ContainerButtons ({children, ...rest}) {
console.log(rest);
return <Button { ...rest}>{children}</Button>


    
}

export default ContainerButtons