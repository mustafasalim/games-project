import React from 'react'

function TopHeader() {
    return (
        <div className='w-full h-8 bg-[#1d2229a6]'>

            <div className='w-full h-full flex items-center justify-end pr-3 text-[12px]'>

                <ul className='flex items-center justify-center gap-2 text-[#EEEEEEa6] leading-5 cursor-pointer'>
                    <li className='hover:text-[#EEEEEE]'>
                        Çerez politikaları
                    </li>
                    <li className='hover:text-[#EEEEEE]'>
                        Gizlilik
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default TopHeader
