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
    
              {cartList.map((item, index) => (
    
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div
                    key={index.id}
                    className="card mt-2 mb-2 m-auto  "
                  >
                    <div className="card-header">
                      <h5>{item.item.title}</h5>
                    </div>
                    <div className="card-body">
                      <img
                        src={item.item.photoUrl}
                        className="card-img-top w-25"
                        alt=""
                      />
                    </div>
                    <div className="card-footer row text-center">
                      <p className="card-text-p col-12 col-sm-7 col-md-7 col-lg-7">{`Precio : ${(
                        item.item.precio
                      )}`}</p>
    
                      <p className=" card-text-p col-12 col-sm-4 col-md-4 col-lg-4">{`Unds :  ${item.cantidad} `}</p>
                      <p className=" card-text-p col-12 col-sm-8 col-md-8 col-lg-8">{`Sub total :  ${(
                        parseInt(item.cantidad) * parseInt(item.item.precio)
                      )} `}</p>
    
                      <button
                        type="button"
                        className="btn btn-danger col-12 col-sm-4 col-md-4 col-lg-4"
                        onClick={() => removerItem(item.item.id)}
                      >
                        ELIMINAR PRODUCTO{" "}
                      </button>
                    </div>
                  </div>
                </div>
    
              ))}
    
              <PriceTotal/>
    
              <ClearListButton/>
    
              <ContinueBuying/>
    
    
            </div>
          )}
        </div>
      );

}

export default Cart
