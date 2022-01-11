import React from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({producto}) => {
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
                    <Button id={producto.id} variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default ItemDetail
