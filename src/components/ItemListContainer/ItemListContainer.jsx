import React, {useState, useEffect} from 'react'

import { getFetch } from '../../helpers/mock';
import ItemList from '../ItemList/ItemList';




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
                <ItemList productos = {productos}  />
            }




            

        </div>

    )
}

export default ItemListContainer
