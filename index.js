const { ApolloServer} = require("apollo-server");
const {typeDefs} = require("./schema");
const {Query} = require("./resolvers/query")
const {Product} = require("./resolvers/product")
const {Category} = require("./resolvers/category")
const {Mutation} = require("./resolvers/mutation")
const {products, categories} = require("./db")

const server = new ApolloServer({
    typeDefs, resolvers: {
            Query,
            Product,
            Category,
            Mutation
        },
        context :{
            products,
            categories
            
        }
});
server.listen().then((url) =>(
    console.log("listening at" + {url})
));
