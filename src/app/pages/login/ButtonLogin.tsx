import React from "react";

interface IButtonLoginProps{
    text:string;
    type?: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type,onClick,text,children}) =>{
    return(
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}