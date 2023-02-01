import { Field, ID, ObjectType } from "type-graphql";

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
