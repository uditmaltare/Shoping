import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ dispatch }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);
    const Addtocard = (product) => {
        dispatch({ type: 'ADD_TO_CARD', product })
    }
    return (
        <div>
            <Link to='/'><header className="bg-blue-600 text-white p-6 shadow-lg">
                <h1 className="text-4xl font-bold text-center tracking-wide">My Shop</h1>
            </header></Link>

            <div className="flex flex-wrap justify-center gap-6 p-6">
                {products.map((product) => (
                    <div key={product.id} className="w-72 h-auto p-3  bg-white rounded-md shadow-lg text-center mt-2">
                        <h4 className="text-lg font-medium mb-2">{product.title}</h4>
                        <img className="w-auto h-48 object-cover rounded" src={product.image} alt={product.title} />

                        <div className="flex justify-center mt-4 space-x-3">
                            <button className="text-sm font-semibold bg-blue-200 p-2 rounded-lg">Add to Cart</button>
                            <Link to='/detail'><button onClick={() => Addtocard(product)} className="text-sm font-semibold bg-blue-200 p-2 rounded-lg">Show Detail</button></Link>
                        </div>
                    </div>
                ))


                }
            </div>
        </div>
    );
}
