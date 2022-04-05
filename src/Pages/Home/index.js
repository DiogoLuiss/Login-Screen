import React, { useState, useRef } from "react"; //UseEffect é chamado a inicar a pagina ou quando o estado de array de dependencia do useEffecet é alterado
import people from "../../assets/people.png";
import Arrow from "../../assets/Arrow.png";
import { useHistory } from "react-router-dom"

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens/Index"
import  ContainerButton  from "../../components/Button/index";


import axios from "axios";

import {
    Global,
    ContainerMain,
    ImgBackground,
    LabelInput,
    Input,
    
    ImgArrow,



} from "./styled"




const App = () => {

    const [users, setUsers] = useState([]) //setusers, a função set permite que eu mande qualquer tipo de dado, não apenas o array
    //o princiop é , o estado do react é imutavel, para eu fazer alguma alteração eu preciso, praticamente criar outro estado novamente.

    const InputName = useRef()
    const InputAge = useRef()
    
    const History = useHistory()

    async function CreatNewUser() {  //Wait e async serve para parar o codigo até os pontos marcador com eles serem executados

        const { data: New } = await axios.post("http://localhost:3001/users", {
            Name: InputName.current.value,
            Age: InputAge.current.value,



        }

        )

        History.pushState("/usuarios")

        setUsers([...users, New])




        // function Upadte () {
        //     for (let index = 1; 20 < users.length; index++) {

        //         if (New.Name == users[index].Name || New.Age == users[index].Age) {
        //             return alert("Esse usuario ja existe")

        //         }
        //         console.log(index)
        //     }
        // }


        //  setUsers([...users, { id: Math.random(), Name: InputName.current.value, Age: InputAge.current.value, }]) //Com o set.. vc  não deve colocar o push
        //InputName.current.value = ""
        //InputAge.current.value = ""
    }


    //     useEffect(() => {

    // async function  fetchUsers() {
    //             const { data: NewUsers} = await axios.get("http://localhost:3001/users")
    //             setUsers(NewUsers)
    //         }
    //         fetchUsers()
    //     }, [])

    //O Spread Intera um Array com base no anterior

    // async function DeleteUser(UserId) {

    //     await axios.delete(`http://localhost:3001/users/${UserId}`) 

    //     const NewUsers =  users.filter(User => User.id !== UserId)

    //     setUsers(NewUsers)
    // }




    return (

        <Global>

            <ContainerMain>

                <ImgBackground alt="Img-people" src={people} ></ImgBackground>

                <ContainerItens isblur = {true}>

                    <H1>Olá!</H1>
                    <LabelInput> Name:

                        <Input ref={InputName} type={"text"} ></Input>

                    </LabelInput>
                    <LabelInput>Idade:

                        <Input ref={InputAge} type={"number"} max="100"  ></Input>

                    </LabelInput>

                    <ContainerButton  to="/usuarios" onClick={CreatNewUser}>Cadastrar
                        <ImgArrow alt="Img-Arrow" src={Arrow} ></ImgArrow>
                    </ContainerButton>





                </ContainerItens>

            </ContainerMain>
        </Global>
    )

}
export default App;