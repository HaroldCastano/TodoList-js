// import { TodoList } from "./classes/todo-list.class";
// import { Todo } from "./classes/todo.class";

import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";

import "./styles.css";

export const todoList = new TodoList();

todoList.todos.forEach((todo) => crearTodoHtml(todo));
//todoList.todos.forEach(crearTodoHtml);  Esta forma de escribir es igual
//para la linea de arriba. por que si lo que se envia en la fulcion
//flecha es lo mismo que envio en la funcion en este caso todo y todo
//s epuede dejar solo el nombre de la funcion, en este caso crearTodoHtml

const newTodo = new Todo("aprender Js");
// todoList.nuevoTodo(newTodo);

newTodo.imprimirClase();

console.log("todos", todoList.todos);
