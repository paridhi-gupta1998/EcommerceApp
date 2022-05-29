

exports.Query = {
    products: (parent, {filter}, {products})=>{
        let filteredProducts = products;
        if(filter){
            filteredProducts = products.filter(prd=> prd.onSale == filter.onSale);
        }
       return filteredProducts;
    },
    product: (parent, args, context)=> {
        const productid = args.id;
        const product = context.products.find(pr=> pr.id === productid)
        return product;

    },
    categories: (parent, args, context)=> {
        return context.categories;
    },
    category: (parent, args, context)=> {
        const id = args.id;
        return context.categories.find(pr=> pr.id === id)
    },
}