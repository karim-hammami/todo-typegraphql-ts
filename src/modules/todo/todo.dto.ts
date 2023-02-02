import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Todo {
    @Field(() => ID, {nullable: false})
    id: number

    @Field()
    title: string

    @Field()
    desc: string

    @Field()
    status: string
}

@InputType()
export class CreateTodoInput {
    @Field() 
    title: string

    @Field()
    desc: string
}


@InputType()
export class UpdateTodoInput {
    @Field()
    title: string

    @Field()
    desc: string

    @Field()
    status: string
}
