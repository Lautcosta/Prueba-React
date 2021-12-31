const productos = [
    {id:1, img: 'https://media2.giphy.com/media/IeFnrNj0fcXG4YuCfj/giphy.gif?cid=ecf05e472rc72oofaqm6yemoz9y9ui50k6okzhq3140ltv2j&rid=giphy.gif&ct=g'},
    {id:2, img: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000'},
    {id:3, img: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000'},
    {id:4, img: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000'},
    {id:5, img: 'https://logitechar.vteximg.com.br/arquivos/ids/157828-450-450/910-005941.png?v=637481517811030000'},
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

