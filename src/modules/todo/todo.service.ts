import prisma from "../../utils/prisma"


export async function getTodoById(id: number) {
    return prisma.todo.findUnique({
        where: {
            id,
        }
    })
}

export async function getAllTodos() {
    return prisma.todo.findMany()
}


export async function createTodo() {
    return 
}


export async function updateTodo() {
    return
}


export async function deleteTodo() {
    return
}
