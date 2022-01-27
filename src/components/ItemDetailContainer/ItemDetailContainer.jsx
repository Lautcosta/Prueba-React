import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { getFetch } from "../../helpers/mock"
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setproducto] = useState({})
    const {idDetalle} = useParams()

    useEffect(() => {
        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === idDetalle)))
    }, [])

    return (
        <div>
            <ItemDetail producto ={producto}/>
        </div>
    )
}

export default ItemDetailContainer
