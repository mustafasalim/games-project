import React from 'react'
import Menu from './menu'
import Search from './search'


function Header() {
    return (
        <header className='mt-5 w-full h-[100px] flex-col items-center justify-between sticky top-0 bg-transparent backdrop-blur-md'>
            <Menu />
            <div className='mt-8'>
                <Search />
            </div>
        </header>
    )
}

export default Header
