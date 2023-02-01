import { Query, Resolver } from "type-graphql";
import { Todo } from "./todo.dto";


@Resolver(() => Todo)
class Todoresolver {


    @Query(() => Todo)
    todo() {
        return {
            id: 1,
            title: "gym",
            desc: "goto gym",
            status: "pending"
        }
    }
}


export default Todoresolver
