import {Link} from "react-router-dom";

export default function Login() {
    const onSubmit = (event) => {
        event.preventDefault()

    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title"> Login</h1>
                    <input type="email"placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <button className="btn btn-block">Entrar</button>
                    <p className="Message">
                        Não registrado? <Link to="/signup">Crie uma conta</Link>

                    </p>

                </form>

            </div>
        </div>
    )
}
