import {Todo} from '../classes';
import {todoList} from '../index';

// Aca haremos 1 metodo que permita construir y rehacer un codigo HTML del <ul class="todo-list">

//Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');



//Funcion de crear HTML
export const crearTodoHtml = (todo)=> {
    

// Esto es un String de apoyo en html que interpola con el todo y los elementos de la clase Todo.class
    const htmlTodo = `

<li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
    <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`;



//Aqui creamos un div en duro que ayudara a que se incluya componentes para la lista:
const div = document.createElement('div');
div.innerHTML  = htmlTodo;


divTodoList.append(div.firstElementChild); //Este firstElementChild hace que sale al primer hijo en el html y ya no sea un <div> sino el <li>

return div.firstElementChild; // Esta funcion va a retornar este elemento HTML y en otro lugar hara la insercción


}


//EVENTOS:

//Este primer evento ayuda a ingresar un nuevo todo a la lista
txtInput.addEventListener('keyup', (event)=>{

    if(event.keyCode === 13){

        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value);

        todoList.nuevoTodo(nuevoTodo); //importamos en el arreglo de TODO List lo nuevo ingresado aqui

        console.log(todoList);

        
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';



    }


});



//Este evento me permitira saber a que parte de la lista estoy haciendo click y asi diferenciar uno de los otros:

divTodoList.addEventListener('click', (event) =>{


    //esto me permite reconocer cual es un input, un label o un boton en cada componente de la lista
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoID = todoElemento.getAttribute('data-id'); //en esta linea extraigo el id del elemento de la lista al que le haga un click
 
    if( nombreElemento.includes('input')){ //Si en el input hay un click de check marca completado sino no:
        todoList.marcarCompletado(todoID);
        todoElemento.classList.toggle('completed');

    } else if(nombreElemento.includes('button')){

       todoList.eliminarTodo(todoID);
       divTodoList.removeChild(todoElemento);
    }

    

});


//Este evento me permite Borrar todos los todos de mi lista de todos que marque como completado:

btnBorrar.addEventListener('click', ()=>{

    todoList.eliminarCompletado();

    for(let i = divTodoList.children.length-1; i>=0; i--){  //barremos la lista de todos de abajo hacia arriba para que segun la cantidad funcione

        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
        


    }


});

//Este evento permite realizar los botones de pendientes, completados, todos:

ulFiltros.addEventListener('click', (event)=>{


    const filtro = event.target.text;
    if(!filtro){return; }

    //en esta linea debemos barrer nuestro anchortags, osea el cuadrito que esta en cada boton debe correr y borrar la clase selected del index.html
    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');
    //


    for (const elemento of divTodoList.children){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){

            case 'Pendientes': 
            
            if(completado){
                elemento.classList.add('hidden');
            }
            break;


            case 'Completados': 
            
            if(!completado){
                elemento.classList.add('hidden');
            }
            break;

        }

    }




});




