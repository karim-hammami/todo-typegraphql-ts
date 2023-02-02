import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateTodoInput, Todo } from "./todo.dto";
import { createTodo, getAllTodos } from "./todo.service";


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
}


export default Todoresolver
