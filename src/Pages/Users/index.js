import React, { useState, useEffect } from "react"; //UseEffect é chamado a inicar a pagina ou quando o estado de array de dependencia do useEffecet é alterado

import Arrow from "../../assets/Arrow_Invert.png";
import Metting from "../../assets/Metting.png";
import { useHistory } from "react-router-dom"
import Trash from "../../assets/Trash.png";

import H1 from "../../components/Title/index"
import ContainerItens from "../../components/ContainerItens/Index"
import ContainerIButtons  from "../../components/Button/index";

import axios from "axios";

import {
    Global,
    ContainerMain,
    ImgBackground,
    UsersLi,

    ImgArrow,




} from "./styles"




const Users = () => {

    const History = useHistory()

    const [users, setUsers] = useState([]) //setusers, a função set permite que eu mande qualquer tipo de dado, não apenas o array
    //o princiop é , o estado do react é imutavel, para eu fazer alguma alteração eu preciso, praticamente criar outro estado novamente.

    useEffect(() => {
        async function FetchUsers() {
            const { data: NewUsers } = await axios.get("http://localhost:3001/users")

            setUsers(NewUsers)
        }
        FetchUsers()
    }, [])

    function Nav() {
        History.push("/")
    }


    async function DeleteUser(UserId) {

        await axios.delete(`http://localhost:3001/users/${UserId}`)

        const DeleteUsers = users.filter(User => User.id !== UserId)
        console.log(UserId)
        setUsers(DeleteUsers)
    }

    return (

        <Global>

            <ContainerMain>

                <ImgBackground alt="Img-people" src={Metting} ></ImgBackground>

                <ContainerItens>

                    <H1>Usuários</H1>

                    <ul>
                        {users.map((users) =>
                            //Para se mandar informação em uma fuction, se colocar {() => função (imformação) }
                            <UsersLi key={users.id} >
                                <p>{users.Name}</p>  <p>{users.Age}</p>

                                <button onClick={() => DeleteUser(users.id)}  > <img alt="Trash-Img" src={Trash}></img></button>

                            </UsersLi>

                        )}

                    </ul>




                    <ContainerIButtons IsBack = {true} to={"/"} onClick={Nav} > <ImgArrow alt="Img-Arrow" src={Arrow} ></ImgArrow> Voltar </ContainerIButtons>

                </ContainerItens>

            </ContainerMain>
        </Global>
    )

}
export default Users;
//Para se mandar informação em uma fuction, se colocar {() => função (imformação) }