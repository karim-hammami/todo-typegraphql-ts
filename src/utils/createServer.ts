import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-fastify";
import fastify from "fastify";
import { buildSchema } from "type-graphql";
import Todoresolver from "../modules/todo/todo.resolver";

const app = fastify()

function buildContext() {

}

export async function createServer() {
    const schema = await buildSchema({
        resolvers: [Todoresolver]
    })

    const server = new ApolloServer({
        schema,
        plugins: [
            ApolloServerPluginDrainHttpServer({
                httpServer: app.server 
            })
        ],
        context: buildContext
    })

    return {app, server}
}
