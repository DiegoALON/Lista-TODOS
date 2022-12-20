
import { Todo } from './Todo.class';

//en esta clase se encuentran los metodos a utilizar y el constructor del todo donde se almacenara en un arreglo

export class TodoList{


    constructor(){

        //this.todos = [];
        this.cargarLocalStorage();
    }


    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

       this.todos = this.todos.filter( todo => todo.id != id);
       this.guardarLocalStorage();


    }

    marcarCompletado(id){

        for(const todo of this.todos){

            if(todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }

        }

    }

    eliminarCompletado(){

        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();


    }

    guardarLocalStorage(){

        // la idea es guardar mis todos en un objeto tipo JSON para solventar el problema de tipo strings
        localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    cargarLocalStorage(){

         //este JSON parse hace lo contrario a lo de arriba, en vez de enviar de tipo string lo obtiene de su tipo object original
         //si en  caso no existe un localStorage inicializara nuevamente el arreglo vacio:
       
        this.todos = (localStorage.getItem('todo')) 
        ? JSON.parse(localStorage.getItem('todo'))
        : [];


        // el metodo map en los arreglos me permite poder retornar nuevos valores del arreglo que han sido alterados:
        this.todos = this.todos.map( obj => Todo.fromJson( obj ));
        
    }


}