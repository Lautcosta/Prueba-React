import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


const Item = ({prod}) => {
    return (
        <div>
            <Card className='text-center mx-auto' key={prod.id} style={{ width:'18rem' }}>             
            
            <Card.Body>

                <Card.Title>Producto {prod.id}</Card.Title>
                
                <Card.Text>
                    
                </Card.Text>

                <Link to={`/detalle/${prod.id}`}>
                <Button variant="primary">Detalle</Button>
                </Link>   
                

            </Card.Body>

    
            </Card>
            
            
            
        </div>
    )
}

export default Item
