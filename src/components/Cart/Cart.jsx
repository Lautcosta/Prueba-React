import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ClearListButton from "../ClearListButton/ClearListButton";
import ContinueBuying from "../ContinueBuying/ContinueBuying";
import PriceTotal from "../PriceTotal/PriceTotal";

const Cart = () => {

    const { cartList, removerItem } =
    useCartContext();

    return (

        <div className="container ">
          {cartList.length === 0 ? (

            <div className="row text-center">
              <div className="col-12">
                <h2>Carrito vacio</h2>
                <Link to={"/"}>
                  <button type="button" className="btn btn-warning  ">
                    ir a la tienda
                  </button>
                </Link>

              
              </div>
            </div>

          ) : (
            <div className="row text-center">
    
              
    
        
    
              <PriceTotal/>
    
              <ClearListButton/>
    
              <ContinueBuying/>
    
    
            </div>
          )}
        </div>
      );

}

export default Cart