import React from 'react'
import { CiSearch } from "react-icons/ci";
function Search() {
    return (
        <div className='flex items-center justify-center '>

            <label className='flex items-center justify-center relative'>
                <input className='w-auto p-4 h-4 rounded-md bg-[#13161b] text-[#EEEEEEa6] focus:outline-none focus:outline-[#1d2229a6]' placeholder='Search..' type="text" />
                <div className='absolute right-0 mr-2'>
                    <CiSearch />
                </div>

            </label>
        </div>
    )
}

export default Search
