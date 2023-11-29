import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../../stores/seacrh';
function Search() {

    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.items.searchTerm);

    const handleInputChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };
    return (
        <div>

            <label className='flex items-center justify-center relative'>
                <input
                    type="text"
                    placeholder='Search..'
                    value={searchTerm}
                    onChange={handleInputChange}
                    className=' p-4 h-4  rounded-md overflow-hidden w-[30px] bg-[#13161b] text-[15px] text-[#EEEEEEa6] transition-all focus:w-[200px] focus:outline-none  focus:border-2 focus:border-red-500' />
                <div className='absolute cursor-pointer right-0 mr-2 '>
                    <CiSearch />
                </div>

            </label>
        </div>
    )
}

export default Search

