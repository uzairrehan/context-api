export type productsType = {
    id:number,
    price:number,
    name:string,
    category:string
}
export type itemsContextType ={
    product : productsType,
    useProduct : (product:productsType)=>void  
}


