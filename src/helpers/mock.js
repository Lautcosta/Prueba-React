const productos = [
    /* Mouses */
    {id:'1', 
    name : 'Lautaro', 
    categoria:'mouse',
    precio : 150, 
    stock: 5,
    foto: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000'},
    
    {id:'2', 
    name : 'Lautaro',
    categoria:'mouse',
    precio : 150, 
    stock: 7,
    foto: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000'},

    {id:'3', 
    name : 'Lautaro',
    categoria:'mouse',
    precio : 150,
    stock: 10, 
    foto: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000'},

    /* Teclados */
    {id:'4',
    name : 'Lautaro',
    categoria:'teclado',
    precio : 200,
    stock: 3,
    foto: 'https://http2.mlstatic.com/D_NQ_NP_951328-MLA45161155362_032021-O.jpg'},

    {id:'5', name : 'Lautaro',
    categoria:'teclado',
    precio : 200, 
    stock: 12,
    foto: 'https://http2.mlstatic.com/D_NQ_NP_951328-MLA45161155362_032021-O.jpg'},
];

export const getFetch = new Promise((resolve, reject)=>{
    //acciones
    let condicion = true;
    if(condicion){
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    }else{
        reject('error')
    }
})

