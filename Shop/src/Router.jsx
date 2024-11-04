import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Cart from "./Component/Cart";
import CartDetail from "./Component/CartDetail";

export const myRouter = createBrowserRouter([

    {
        path: "",
        element: <App />
    },
    {
        path: "cart",
        element: <Cart />
    },
    {
        path: "detail",
        element: <CartDetail />
    }
])