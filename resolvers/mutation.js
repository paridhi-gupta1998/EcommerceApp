exports.Mutation ={
    addCategory: (parent, {input}, {categories})=> {
        const newcategory = {
            id: input.id,
            name: input.name
        };
        categories.push(newcategory)
        return newcategory;
    },
    addProduct: (parent, {input}, {products})=> {
        const newproduct = {...input}
        products.push(newproduct)
        return newproduct;
    }
}