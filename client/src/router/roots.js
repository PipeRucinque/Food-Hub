import {createBrowserRouter} from "react-router-dom";

import ErrorPage from '../error-page';
import Layouts from "../layouts/Layouts";

import Home from '../pages/Home';
import Map from '../pages/Map';
import Categories from "../pages/Categories";
import Dish from "../pages/Dish";
import Register from "../pages/Register";
import Favorites from "../pages/Favorites";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path: "/map", 
            element: <Map/>
        },
        {
          path: "/categories", 
          element: <Categories/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/favorites",
          element: <Favorites/>
        },
        {
          path: "/dish/:dish",
          element: <Dish/>
        },
      ]

    },
    
  ]);

  export default router