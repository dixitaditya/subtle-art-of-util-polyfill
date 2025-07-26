// todoService.js
import { fetchTodo } from "./fetchTodo.js";

export function getTodoTitle(id) {
  const todo = fetchTodo(id);
  return todo.title;
}