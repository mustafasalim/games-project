import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/home"
import MainLayout from "../layout/main"

const routes = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />

            },
            {

                path: "/kategori",
                element: "kategori"
            },
            {
                path: "*",
                element: "notfnud"
            }
        ]
    },

])




export default routes