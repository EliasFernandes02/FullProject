import {Link} from "react-router-dom";

export default function SignUp() {
    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title"> Cadastre-se</h1>
                    <input type="text"placeholder="Nome"/>
                    <input type="email"placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirmar Senha"/>
                    <button className="btn btn-block">Cadastrar</button>
                    <p className="Message">
                        Já possui cadastro? <Link to="/login">Entre agora</Link>
                    </p>
                </form>

            </div>
            Login
        </div>
    )
}
