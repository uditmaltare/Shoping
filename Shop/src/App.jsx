import React, { useReducer } from 'react';
import shop from './Component/shop.jpeg';
import { Link } from 'react-router-dom';

export default function App() {

  const initialState = {
    cart: []
  };


  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.product] };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <center>
        <img src={shop} alt="Shop" className="w-1/2 h-96 object-cover text-center" />
        <Link to="/cart">
          <button className="bg-teal-500 mt-5 text-white font-semibold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-teal-600">
            Shop Now
          </button>
        </Link>
      </center>
    </div>
  );
}
