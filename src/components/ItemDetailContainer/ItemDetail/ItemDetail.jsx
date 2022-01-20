import React from "react"
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
import ItemCount from "../../useState/ItemCount";






const ItemDetail = ({producto}) => {

    const [show, setShow] = useState(true)

    const onAdd = (counter) => {
        setShow(false)
        agregarAlCarrito({...producto, cantidad: counter})
    }

    const {agregarAlCarrito} = useCartContext



    return (
        <div className="text-center">

            <Card className='text-center container my-5' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.foto} />
                <img src="producto.foto" alt="" />
                <Card.Body>
                    <Card.Title>{producto.producto}</Card.Title>
                    <h1>PRODUCTO:</h1>
                    <Card.Text>
                         ID : {producto.id}<br/>
                    </Card.Text>

                    {
                        show ? <ItemCount min={1} max={10} onAdd={onAdd}/> :
                        <div>
                            
                            <Link to='/'><button>Continuar compra</button></Link>
                            <Link to='/cart'><button>Ir a carrito</button></Link>

                        </div> 
                    }

                </Card.Body>
            </Card>
            
        </div>
    )
}

export default ItemDetail
