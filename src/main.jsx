import React from 'react'
import * as ReactDOM from "react-dom/client";
import routes from '../src/routes'
import { RouterProvider } from 'react-router-dom'
import "./assets/css/tailwind.css"
import store from "../src/stores/index"
import { Provider } from 'react-redux';




ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>

)
