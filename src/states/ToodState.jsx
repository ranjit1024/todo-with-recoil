import { atom, selector } from "recoil";

export const todo = atom({
    key:"todolist",
    default:[]
})

export const searchValue = atom({
    key:"searchValue",
    default:""
})

export const FilterTodo = selector({
    key:"filtertodo",
    get: ({get}) =>{
        const todos = get(todo)
        const input = get(searchValue);

        return todos.filter(data => data.title.includes(input));
    }
})
