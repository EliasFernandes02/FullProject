import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../Context/ContextProvider.jsx";

export default function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setUser, setToken} = useStateContext()
    const onSubmit = (event) => {
        event.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
       axiosClient.post('/signup',payload)
           .then(({data})=> {
               setUser(data.user)
                setToken(data.token)
           })
           .catch(err => {
               const response = err.response;
               if(response && response.status == 402){
                  console.log(response.data.errors);
               }

           })

    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title"> Cadastre-se</h1>
                    <input ref={nameRef}type="text"placeholder="Nome"/>
                    <input ref={emailRef}type="email"placeholder="Email"/>
                    <input ref={passwordRef}type="password" placeholder="Senha"/>
                    <input ref={passwordConfirmationRef}type="password" placeholder="Confirmar Senha"/>
                    <button className="btn btn-block">Cadastrar</button>
                    <p className="Message">
                        Já possui cadastro? <Link to="/login">Entre agora</Link>
                    </p>
                </form>

            </div>
        </div>
    )
}
