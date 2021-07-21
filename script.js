
//0-cargamos Data de otro archivo
import {data} from './data.js';
//3- vas al documento HTML seleccionas el contenido del id Template-card
const templateCard = document.getElementById('template-card').content;
//8- agregamos los nodos adicionados
const fragment = document.createDocumentFragment();
//9- capturamos items
const items = document.getElementById('items');

//2- escucha los eventos y con DOMContentLoaded garantiza 
//que cuando se ejecute la pagina llame a la funcion 
//cargarData
document.addEventListener('DOMContentLoaded', ()=>{
cargarData(data);
})


//1- creamos una funcion para recibir el export de data.js
//y cargar la data en consola
const cargarData = data =>{
    console.log(data);
    //ForEach permite tomar a Data y enviarla a la posicion 0
    //recorrer o ingresar en los vectores
    data.forEach(heroe => { //heroe es un objeto
        //5-desestructuramos el objeto con:
        const {id,superhero,image} = heroe;
        //4-selecciono el elemento H5 para colocar el nombre del
        //super heroe del Arrray
        //para usar "superhero debemos desestructurar el objeto"
        templateCard.querySelector('h5').textContent = superhero;
        //6-cargamos la imagen de la misma forma que el texto
        templateCard.querySelector('img').setAttribute('src',image);
        //7-necesitamos clonar el templateCard 14 o las veces que sean necesarias
        const clone = templateCard.cloneNode(true);
        //ahora necesitamos adicionarlos con
        fragment.appendChild(clone)
    });
    //10- podemos verlo en items del documento html con
    items.appendChild(fragment);
}

//Formulario
//1-cuando de click en submit
form.addEventListener('submit', function AlmacenaLocalStorage(){
    //2-capturamos los datos introducidos en variables
    let inputName = document.getElementById('inputName').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let msm = document.getElementById('msm').value;

    //hacemos validaciones por codigo si no coloca los caracteres
    if(inputName ==="" || email ==="" || gender ==="" || msm ===""){
        alert('Ingrese todos campos');
    }else{//de lo contrario almacene en localstorage
        localStorage.setItem('Nombre', inputName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Genero', gender);
        localStorage.setItem('Mensaje', msm);
        //luego ejecute la funcion TomarLocalStorage
        TomarLocalStorage();
    }
})
//funcion para tomar datos del localstorage
function TomarLocalStorage(){

    let nombre = localStorage.getItem('Nombre');
    let mail = localStorage.getItem('Email');
    let genero = localStorage.getItem('Genero');
    let message = localStorage.getItem('Mensaje');

    alert(`el nombre ingresado es ${nombre} 
            su correo es ${mail} su genero
            ${genero} y su mensaje ${message}`);
}

