import prisma from "../../utils/prisma"
import { CreateTodoInput, InputById, UpdateTodoInput } from "./todo.dto"


export async function getTodoById(input: InputById) {
    return prisma.todo.findUnique({
        where: {
            id: input.id,
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


export async function updateTodo(input: UpdateTodoInput) {
    return prisma.todo.update({
        where: {
            id: input.id,
        },
        data: {
            title: input.title,
            desc: input.desc,
            status: input.status,
        }
    })
}


export async function deleteTodo(input: InputById) {
    return prisma.todo.delete({
        where: {
            id: input.id,
        }
    })
}
