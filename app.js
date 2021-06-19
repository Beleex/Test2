
let nombres = ['marcus', 'petrus', 'pikus'];

function saludame (nombre){    
    console.log("Hola " + nombre)
}

for(let i = 0; i < nombres.length; i++){
    saludame(nombres[i])
}