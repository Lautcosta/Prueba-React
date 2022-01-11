const productos = [
    {id:'1', img: '../../public/img/2593781.jpg', name : 'Lautaro'},
    {id:'2', foto: '../../public/img/FDIPt5mXIAs_94M.jfif', name : 'Lautaro'},
    {id:'3', foto: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000', name : 'Lautaro'},
    {id:'4', foto: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000', name : 'Lautaro'},
    {id:'5', foto: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000', name : 'Lautaro'},
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

