import React, { useEffect, useState } from "react";
import { getData } from "../../Helpers/FetchProductsApi";
import { EcomerceHeader } from "../EcomerceHeader/EcomerceHeader";

const api = "https://fakestoreapi.com/products";

export const Ecomerce = ({ counter, updateCounter }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData(api);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const addToCart = () => {
        updateCounter(counter + 1);
    };

    return (
        <div className="flex flex-col min-h-screen bg-zinc-600 p-4">
            <EcomerceHeader counterValue={counter} />
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-md p-4"
                    >
                        <img
                            className="h-40 w-36 object-cover mx-auto"
                            src={product.image}
                            alt="Product"
                        />
                        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                        <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
                        <p className="text-gray-600">Category: {product.category}</p>
                        <button
                            className="bg-purple-600 text-white py-2 px-4 mt-2 hover:bg-purple-700"
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
