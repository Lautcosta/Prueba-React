import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({prod}) => {
    return (
        <div>
            <Card className='text-center mx-auto' key={prod.id} style={{ width:'18rem' }}>             
            
            <Card.Body>

                <Card.Title>Producto {prod.id}</Card.Title>
                
                <Card.Text>
                    
                </Card.Text>

                <Button variant="primary">Comprar</Button>

            </Card.Body>

            </Card>
            
        </div>
    )
}

export default Item
