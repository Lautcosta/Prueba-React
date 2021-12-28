import React, {useState} from 'react'



const ItemCount = ({min, max, onAdd}) => {

    const [counter, setCounter] = useState(min)
    const [show, setShow] = useState(false)

    const suma = () => {

        counter < max ? setCounter(counter+1) : alert("Stock Maximo chaval")  
        
    }

    const resta = () => {

        counter > min ? setCounter(counter-1) : alert("Minimo de compra") 
        
    }

    const mostrar = () => {
        setShow(!show)
    }


    return (
        <div className='text-center'>

            <h1>{counter}</h1>

            <button onClick={suma}>+</button>

            <button onClick={resta}>-</button>
            <br/> <br/>
            <button onClick={mostrar}>Agregar al carrito</button>

            {
                show && <h1>{counter}</h1>
            }

        </div>
    )
}

export default ItemCount





/* import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ item, stock, initial, onAdd  }) => {
    const [contador, setContador] = useState(parseInt(initial));
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const sumarUno = () => setContador(contador + 1);

    const agregarCarrito = () => {

        onAdd(contador);

        setCambiarBoton(false)
        
    }

    const restarUno = () => setContador(contador - 1);

    return (

        <div className="  text-center ">
            {cambiarBoton ?
                <div>

                    <button className="btn btn-outline-primary btn-block" disabled={contador <= 0} onClick={restarUno}>
                        -
                    </button>
                    <label className="contador mt-2">{contador}</label>

                    <button className="btn btn-outline-primary btn-block" disabled={contador >= stock} onClick={sumarUno}>
                        +
                    </button>
                    <br />
                    

                    <button className="btn btn-outline-primary btn-block" onClick={agregarCarrito}>Agregar al carro</button>
                </div>
                :
                <div>
                    <Link to={'/cart'}>
                    <button className="btn btn-outline-primary btn-block">Terminar Compra</button>
                    </Link>
                    <Link to={'/'}>
                    <button className="btn btn-outline-primary btn-block">Seguir Comprando</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ItemCount; */
