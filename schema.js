
const { gql} = require("apollo-server");
exports.typeDefs = gql`
    type Query{
        hello : String,
        products(filter: ProductFilter): [Product!]!,
        product(id: Int!): Product,
        categories: [Category!]!,
        category(id: Int!, filter: ProductFilter): Category,

    }
    type Mutation{
        addCategory(input: AddCategoryInput!): Category!
    }
    type Mutation{
        addProduct(input: AddProductInput!): Product!
    }
    type Product{
        id: Int
        name: String!
        description: String!
        onSale : Boolean!
        price: Int!
        quantity: Int!
        category: Category
    }
    type Category{
        name: String
        id: Int!
        products(filter: ProductFilter): [Product!]!
    }
    input ProductFilter{
        onSale: Boolean
    }
    input  AddCategoryInput{
        name: String!
        id: Int!
    }
    input  AddProductInput{
        id: Int
        name: String!
        description: String!
        onSale : Boolean!
        price: Int!
        quantity: Int!
    }
    `