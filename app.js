// const fs=require('fs');
// const fs=require('express'); //No es una librería de node, es un paquete que se instala a parte
// const fs=require('./ruta'); //Nuestros propios require
const argv = require('./config/yargs').argv;
const colors=require('colors');

const {crearArchivo, listarTabla}=require('./multiplicar/multiplicar');

let comando=argv._[0];

switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite)
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo=>console.log(`Archivo creado: ${archivo.green}`))
            .catch(e=>console.log(e));
    break;

    default:
        console.log("Comando no reconocido");
}

// console.log(argv.base);

// let parametro=argv[2];
// let base=parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo=>console.log(`Archivo creado: ${archivo}`))
//     .catch(e=>console.log(e));
