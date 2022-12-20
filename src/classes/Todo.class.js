
export class Todo{

//Los metodos no son almacenados en el localStorage mediante el JSON stranlifile, solo almacenara los propiedades de la clase
//la solucion seria crear en la clase TODO una nueva instrucción que me permita crear una nueva instancia de valores que vienen del LocalStorage
//a manera de objetos como si fueran el todo pero no son el todo:

    static fromJson( {id,tarea,completado,creado} ){

        const tempTodo = new Todo( tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        // al retornar la instancia esto ya me permitira poder acceder a mis metodos de la clase TODO
        return tempTodo;

    }

    constructor(tarea){

        this.tarea = tarea;

        this.id = new Date().getTime(); //1234123214
        this.completado = false;
        this.creado = new Date();

    }




   imprimirClase(){
       console.log(`${this.tarea} - ${this.id}`);
   }



}