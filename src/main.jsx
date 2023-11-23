import React from 'react'
import * as ReactDOM from "react-dom/client";
import routes from '../src/routes'
import { RouterProvider } from 'react-router-dom'
import "./assets/css/tailwind.css"

//https://www.freepnglogos.com/uploads/games-png/games-controller-game-icon-17.png
//logo


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={routes} />

)
