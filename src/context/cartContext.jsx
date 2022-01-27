import { createContext, useContext, useState } from "react";

//creo el contexto
const CartContext = createContext([])


// funcion que me evita importar el useContext en todos los archivos 
export function useCartContext(){
    return useContext(CartContext)
}

//cracion del componente que maneja el contexto
export const CartContextProvider = ({children}) => {

    //estados y funciones globales

    const[cartList, setCartList] = useState([]); 
    
    //Funcion Agregar al carrito
    function agregarAlCarrito(items){

        const index = cartList.findIndex(i => i.id === items.id)

        if (index > -1) {

            const cantAnterior = cartList[index].cantidad

            cartList.splice(index, 1)

            setCartList([...cartList, {...items, cantidad: items.cantidad + cantAnterior}])

        } else {
            setCartList([...cartList, {...items, cantidad: items.cantidad}])
        }
    }


    //Funcion Vaciar Carrito
    function vaciarCarrito(){
        setCartList([])
    }


    //Funcion Precio Total
    const precioTotal = () => {
        let total = 0;

        cartList.forEach((itemNvo) => {
            total += parseInt(itemNvo.item.precio) * parseInt(itemNvo.cantidad);
        });

        return parseInt(total);
    };

    //Funcion Remover uno solo
    const removerItem = (id) => {
        setCartList(cartList.filter((itemNvo) => itemNvo.item.id !== id));
    };

    //Funcion Icono en carrito
    const iconCart = () => cartList.reduce((acum, valor) => acum + valor.cantidad, 0);


    return(
        <CartContext.Provider value ={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            precioTotal,
            removerItem,
            iconCart,
        }}>
            {children}
        </CartContext.Provider>
    )


}