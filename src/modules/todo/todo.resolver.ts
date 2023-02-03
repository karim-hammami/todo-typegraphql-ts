import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateTodoInput, InputById, Todo, UpdateTodoInput } from "./todo.dto";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "./todo.service";


@Resolver(() => Todo)
class Todoresolver {
    

    @Mutation(() => Todo)
    async createtodo(@Arg("input") input: CreateTodoInput) {
        const res = await createTodo(input)
        return res
    }

    @Query(() => [Todo])
    async getalltodos() {
        const res = await getAllTodos()
        return res
    }

    @Mutation(() => Todo)
    async deletetodo(@Arg("input") input: InputById) {
        const res = await deleteTodo(input)
        return res
    }

    @Mutation(() => Todo)
    async updatetodo(@Arg("input") input: UpdateTodoInput) {
        const res = await updateTodo(input)
        return res
    }


    @Query(() => Todo)
    async gettodobyid(@Arg("input") input: InputById) {
        const res = await getTodoById(input) 
        return res
    }
}


export default Todoresolver
