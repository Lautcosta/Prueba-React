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

    const[cartList, setCartList] = useState([]) 
 
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

    function vaciarCarrito(){
        setCartList([])
    }
    
    return(
        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )


}