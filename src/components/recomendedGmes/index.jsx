import React from 'react'
import { CgGames } from "react-icons/cg"

function RecommendedGames({ children }) {
    return (
        <div className='w-[1760px] m-5'>
            <div className='flex items-center gap-x-4 ml-5 b border-red-500 text-[26px] font-bold text-[#AAAAAA]'>
                <CgGames />
                {children}
            </div>

        </div>
    )
}

export default RecommendedGames
