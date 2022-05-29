
exports.Category={
    products: (parent, args, context)=> {
        const categoryId = parent.id;
        filteredProducts =  context.products.filter(prd=> prd.categoryId === categoryId);
        
        if(args.filter){
            filteredProducts =  filteredProducts.filter(prd=> prd.onSale == args.filter.onSale);
        }
        return filteredProducts;
    }
}