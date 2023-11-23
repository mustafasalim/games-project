import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/home"
import MainLayout from "../layout/main"
import Mmorpg from "../pages/mmorpg"
import CardGames from "../pages/cardGame"
import Social from "../pages/social"
import Shooter from "../pages/shooter"
import Fighting from "../pages/fighting"
import Arpg from "../pages/arpg"
import ActionRpg from "../pages/actionRpg"
import BattleRoyale from "../pages/battleRoyale"
import Strategy from "../pages/strategy"

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

                path: "/mmorpg",
                element: <Mmorpg />
            },

            {

                path: "/cardgame",
                element: <CardGames />
            },

            {

                path: "/social",
                element: <Social />
            },
            {

                path: "/shooter",
                element: <Shooter />
            },
            {

                path: "/fighting",
                element: <Fighting />
            },
            {

                path: "/arpg",
                element: <Arpg />
            },
            {

                path: "/actionrpg",
                element: <ActionRpg />
            },
            {

                path: "/battleroyale",
                element: <BattleRoyale />
            },
            {

                path: "/strategy",
                element: <Strategy />
            },


            {
                path: "*",
                element: "notfnud"
            }
        ]
    },

])




export default routes