import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { InputLogin } from "./InputLogin";
import { ButtonLogin } from "./ButtonLogin";

export const Login = () =>{

    const navigate = useNavigate();
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    useEffect(() =>{
        console.log(usuario);
    },[usuario])
    
    useEffect(() =>{
        console.log(senha);
    },[senha])

    const memo = useMemo(() =>{
        console.log(usuario.length);
    },[usuario.length]);

    const handleEntrar = () =>{
        if(usuario === "admin" && senha === "admin"){
            navigate("/");
        }
    }

    return(
        <center>
            <form>
                <div>
                    <InputLogin
                        label="Usuario"
                        value={usuario}
                        type="text"
                        onChange={setUsuario}
                        onPressEnter={() => inputPasswordRef.current?.focus()}
                    />

                    <InputLogin
                        label="Senha"
                        value={senha}
                        type="password"
                        ref={inputPasswordRef}
                        onChange={setSenha}
                    />
                    
                    <ButtonLogin
                        type="button"
                        onClick={handleEntrar}
                        text="Entrar"
                    ><>Entrar</></ButtonLogin>
                </div>
            </form>
        </center>
    )
}