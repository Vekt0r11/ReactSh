import React, {useState, useEffect} from 'react';
import '../styles/general-styles.css';

const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}


//El useeffect tine que estar lo más cercano a la funcion con el return 

function Home() {

    const [mensaje, setMensaje] = useState("text-light")
    const cambiarEstado = (val) => setMensaje(val)

    const myArray = ["warning", "success", "info", "danger", "dark", "secondary"]

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
      }
    
      const [state, setState] = useState(false)
    
      useEffect(() => {
        if (state) {
            console.log('cambio el estado, activamos el useEffect')
            fetchData()
        }
      }, [state])



    return (
        <div className="Home">
            <h1 className={"text-"+mensaje}>HEY</h1><br></br>
            <button className="btn btn-dark" onClick={() => cambiarEstado(myArray[Math.floor(Math.random()* myArray.length)])}>
                COLORUWUS
            </button>
            <button onClick={() => setState(!state)} className='btn btn-secondary'>
                Cambiar
            </button>
        </div>
    );
}

export default Home
