import './App.scss';
import Header from "./Components/Header/Header";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./Components/Main/Main";
import Product from "./Components/Main/Product/Product";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>
        },
        {
            path: "/product/:productId",
            element: <Product/>
        }
    ])
    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
