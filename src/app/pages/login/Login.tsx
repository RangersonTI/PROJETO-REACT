export const Login = () =>{
    return(
        <center>
            <form method="POST">
                <label htmlFor="Usuario">Usuario</label>
                <input type="text" name="usuario" id="usuario" />
                <label htmlFor="Senha">Senha</label>
                <input type="password" name="senha" id="senha" />
            <input type="button" name="entrar" id="entrar" value="Entrar"/>
            </form>
        </center>
    )
}