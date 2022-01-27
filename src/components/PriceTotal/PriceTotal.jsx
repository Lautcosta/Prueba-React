import React from 'react'
import { useCartContext } from '../../context/cartContext';

const PriceTotal = () => {
    const { precioTotal} = useCartContext();
    return (
        <div className="col-12 text-center  bg-success text-dark mt-2 mb-2 ">
            <h3 calssName="">{`Total a pagar :  ${(
                precioTotal()
            )}`}</h3>
        </div>
    )
}

export default PriceTotal