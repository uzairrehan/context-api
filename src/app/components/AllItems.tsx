import { useProductContext } from "@/context/items";
import { productsType } from "@/types/types";

export default function AllItems() {
    const { products, fetchProducts } = useProductContext();

    return (
        <>
            {products.map((item: productsType) => (
                <div key={item.id} className="max-w-sm p-6 bg-white rounded-lg shadow-md m-5">
                    <div className="mb-4 text-sm font-semibold text-indigo-600 uppercase">
                        {item.category}
                    </div>
                    <h2 className="mb-4 text-xl font-bold text-gray-800">
                        {item.name}
                    </h2>
                    <div className="flex gap-2">
                        <button className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                            Add to cart
                        </button>
                        <button className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                            Edit
                        </button>
                        <button className="w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}
