import {fetchTodo} from "./mock/fetchTodo.js"

let a = await fetchTodo()
console.log("fetchTodo", a)