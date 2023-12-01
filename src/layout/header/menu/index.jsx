import React from 'react'
import { mainMenu } from '../../../utils/const'
import { NavLink } from 'react-router-dom'


function Menu() {
    return (


        <nav className=' flex items-center justify-center'>

            <ul className='gap-x-4 flex items-center justify-center'>
                {mainMenu.map(menu => (

                    <NavLink key={menu.id} to={menu.path} className=" p-4 h-4 bg-[#1d1f22] text-[#EEEEEEa6] hover:text-red-500 text-[15px] font-bold hover:border-red-500 transition-all leading-6 flex items-center justify-center rounded-md hover:translate-y-1">


                        {menu.title}


                    </NavLink>
                ))}
            </ul>


        </nav>



    )
}

export default Menu
