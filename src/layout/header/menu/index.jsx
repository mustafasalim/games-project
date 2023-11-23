import React from 'react'
import { useState, useEffect } from 'react'
import { mainMenu } from '../../../utils/const'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (

        <nav className='gap-5 flex items-center justify-center '>

            {mainMenu.map(menu => (

                <NavLink className="mt-3 p-4 h-4 bg-[#1d2229a6] text-[#FF5722a6] text-[15px] font-bold hover:bg-[#FF5722a6] transition-all leading-6 flex items-center justify-center rounded-md hover:translate-y-1">


                    {menu.title}


                </NavLink>
            ))}

        </nav>


    )
}

export default Menu
