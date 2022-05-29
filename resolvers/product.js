exports.Product={
    category: (parent, args, context)=> {
        const categoryId = parent.categoryId;
        return context.categories.find(act=> act.id === categoryId);
    }
}