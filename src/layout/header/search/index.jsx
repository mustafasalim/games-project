import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
function Search() {
    const [search, setSearch] = useState("")

    return (
        <div>

            <label className='flex items-center justify-center relative'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    className=' p-4 h-4  rounded-md overflow-hidden w-[30px] bg-[#13161b] text-[15px] text-[#EEEEEEa6] transition-all focus:w-[200px] focus:outline-none  focus:border-2 focus:border-red-500' placeholder='Search..' type="text" />
                <div className='absolute cursor-pointer right-0 mr-2 '>
                    <CiSearch />
                </div>

            </label>
        </div>
    )
}

export default Search

