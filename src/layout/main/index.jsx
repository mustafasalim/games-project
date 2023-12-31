import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../top-header'
import Header from '../header'
import Slider from '../../components/slider'
import Fotter from '../footer'

function MainLayout() {
    return (
        <div>
            <TopHeader />
            <div>
                <Slider />
            </div>
            <div className='flex items-center justify-center sticky top-0 bg-[#272B30]/[.80] z-10 backdrop-blur-md'>
                <Header />
            </div>
            <main>
                <main>
                    <Outlet />
                </main>
            </main>
            <Fotter />
        </div>
    )
}

export default MainLayout
