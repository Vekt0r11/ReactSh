import React from 'react'
import logo from '../../assets/images/bootstrap-logo.svg'

function Form() {

    return (
    <main className="d-flex justify-content-center my-5">
        <form>
            <img className="row mx-auto w-90 my-5" src={logo} alt="" width="72" height="57"></img>
            <h1 className="h3 mb-3 fw-normal">Por favor, inicie sesion</h1>

            <div className="form-floating mb-4">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
            <label for="floatingInput">Correo electrónico</label>
            </div>
            <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
            <label for="floatingPassword">Contraseña</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"></input> Recuerdame
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesion</button>
            <p className="mt-5 mb-3 text-muted text-center">&copy; 2017–2021 - TSDSM</p>
        </form>
    </main>
    )
}

export default Form
