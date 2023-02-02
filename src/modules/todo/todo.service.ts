import prisma from "../../utils/prisma"
import { CreateTodoInput, UpdateTodoInput } from "./todo.dto"


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


export async function createTodo(input: CreateTodoInput) {
    return prisma.todo.create({
        data: {
            title: input.title,
            desc: input.desc,
        }
    })
}


export async function updateTodo({id, input}: {id: number, input: UpdateTodoInput}) {
    return prisma.todo.update({
        where: {
            id,
        },
        data: {
            title: input.title,
            desc: input.desc,
            status: input.status,
        }
    })
}


export async function deleteTodo(id: number) {
    return prisma.todo.delete({
        where: {
            id,
        }
    })
}
