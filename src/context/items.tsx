"use client";

import { itemsContextType, productsType } from "@/types/types";
import { createContext, useContext, useState } from "react";


let productsData = [
    { id: 1, name: "Laptop", price: 80000, category: "Electronics" },
    { id: 2, name: "Smartphone", price: 60000, category: "Electronics" },
    { id: 3, name: "Headphones", price: 5000, category: "Accessories" },
    { id: 4, name: "Shoes", price: 3000, category: "Footwear" },
    { id: 5, name: "Watch", price: 15000, category: "Accessories" },
    { id: 6, name: "Tablet", price: 35000, category: "Electronics" },
    { id: 7, name: "Backpack", price: 2000, category: "Bags" },
    { id: 8, name: "Desk Lamp", price: 1500, category: "Furniture" },
    { id: 9, name: "Chair", price: 5000, category: "Furniture" },
    { id: 10, name: "Water Bottle", price: 800, category: "Accessories" }
]

const ProductContext = createContext<null | itemsContextType>(null);

export default function ProductContextProvider(
    { children }: { children: React.ReactNode }
) {

    const [products, setProducts] = useState<productsType[]>(productsData);


    const fetchProducts = (newProducts: productsType[]) => {
        setProducts([...products, ...newProducts]);
    }

    return (
        <ProductContext.Provider value={{ products, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    )

}


export const useProductContext = () => useContext(ProductContext);