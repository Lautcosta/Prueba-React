import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getFetch } from '../../helpers/mock';




const ItemListContainer = ({greeting}) => {

    const [productos, setProductos] = useState([ ])
    const [loading, setLoading] = useState (true)

    useEffect(() => {
        //simulacro api
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false) ) 
    }, [])

   



    console.log(productos)

    return (
        <div className='text-center'>
            <h1 className='text-center'>{greeting}</h1>

            {
                loading ? <h3>Cargando...</h3> : 
                productos.map(prod => 
                    <Card className='text-center mx-auto' key={prod.id} style={{ width:'18rem' }}>
                 
                    <Card.Img className='text-center mx-auto' variant="top" src="{prod.img}" /> 
                    
  
                    <Card.Body>

                        <Card.Title>Producto {prod.id}</Card.Title>
                        
                        <Card.Text>
                            
                        </Card.Text>

                        <Button variant="primary">Comprar</Button>

                    </Card.Body>

                    </Card>)
            }




            

        </div>

    )
}

export default ItemListContainer
