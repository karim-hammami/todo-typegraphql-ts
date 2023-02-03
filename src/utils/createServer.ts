import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import Todoresolver from "../modules/todo/todo.resolver";


export async function createServer() {
    const schema = await buildSchema({
        resolvers: [Todoresolver]
    })

    const server = new ApolloServer({
        schema,
    })


    server.listen({ port: 8080 }).then(({ url }) => {
        console.log(`🚀  host ready at ${url}`);
    });
}
