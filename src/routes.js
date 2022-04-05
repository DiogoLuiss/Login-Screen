import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home/index"
import Users from "./Pages/Users/index"

function Routes() {

    return (

        <Router>
            <Switch>    
            <Route exact path={"/"} component={Home} /> 
            <Route exact path={"/Usuarios" }  component={Users} /> 
            </Switch>
        </Router>

    ) // Switch serve para limitar as toras que o codigo verifica, aumenta performace

}
export default Routes