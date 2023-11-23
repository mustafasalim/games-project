import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../top-header'
import Header from '../header'

function MainLayout() {
    return (
        <div>
            <TopHeader />
            <Header />
            <main>
                <main>
                    <Outlet />
                </main>
            </main>
        </div>
    )
}

export default MainLayout
