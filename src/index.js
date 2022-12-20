import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

console.log(todoList.todos);
todoList.todos.forEach(crearTodoHtml);

// OJOOO, Si nos damos cuenta se estan creando objetos dentro del arreglo y no son instancias


console.log('todos', todoList.todos);







//Local Storage: me permite poder almacenar de forma local algunos componentes de mi programa y nunca se borraran
//Session Storage: me permite almacenar información pero a diferencia del otro este si se borrara cuando cierre mi programa

//localStorage.setItem('my-key', 'ABC1234');
//sessionStorage.setItem('my-key', 'ABC1234');



