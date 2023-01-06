import {createBrowserRouter} from "react-router-dom";

import ErrorPage from '../error-page';
import Layouts from "../layouts/Layouts";

import Home from '../components/Home';
import Map from '../pages/Map';


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
        // {
        //   path: "/categories", 
        //   element: 
        // },
      ]

    },
    
  ]);

  export default router