export const fetchTodo = async (id) => {
    let res = await fetch(`https://dummyjson.com/todos/${id}`)
    return await res.json()
}

export const fetchTodoError = async (id) => {
    if(id<0) throw new TypeError('ID_LESS_THAN_ZERO')
    else return fetchTodo(id)
}




