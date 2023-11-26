import React from 'react'
import Menu from './menu'
import Search from './search'





function Header() {
    return (
        <header className='w-[1600px] h-[70px] flex items-center justify-between'>

            <Menu />
            <Search />

        </header>
    )
}

export default Header
