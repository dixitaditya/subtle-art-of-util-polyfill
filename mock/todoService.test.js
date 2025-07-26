import {vi,expect,describe,it} from "vitest"
import {fetchTodo, fetchTodoError} from "./fetchTodo"

vi.mock('./fetchTodo.js',async ()=>{
    const ogModules = await vi.importActual('./fetchTodo.js')
    return{
        ...ogModules,
        fetchTodo: (id)=>({
        id:`spoofedId-${id}`,
        title: "Spoofed Title",
        completed: true 
    })
}})


describe('Test Todo Services',()=>{
    it('mocked title test',()=>{
        expect(fetchTodo(22).title).toBe("Spoofed Title")
    });
    it('mocked title test',()=>{
        expect(fetchTodo(2332).title).toBe("Spoofed Title")
    });
    it('check for throwable error case', ()=>{
        expect(fetchTodoError(-1)).rejects.toThrow('ID_LESS_THAN_ZERO')
    })
})