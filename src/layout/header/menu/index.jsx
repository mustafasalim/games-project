import React from 'react'
import { useState, useEffect } from 'react'
import { mainMenu } from '../../../utils/const'
import { NavLink } from 'react-router-dom'


function Menu() {
    return (


        <nav className=' flex items-center justify-center'>

            <ul className='gap-x-4 flex items-center justify-center'>
                {mainMenu.map(menu => (

                    <NavLink to={menu.path} className=" p-4 h-4 bg-[#13161b] text-[#EEEEEEa6] text-[15px] font-bold hover:border hover:border-purple-500 transition-all leading-6 flex items-center justify-center rounded-md hover:translate-y-1">


                        {menu.title}


                    </NavLink>
                ))}
            </ul>


        </nav>



    )
}

export default Menu
