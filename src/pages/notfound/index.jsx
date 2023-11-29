import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

function NotFound() {
    return (


        <div className='w-full h-[300px] overflow-hidden'>
            <div className='relative'>
                <div className=''>
                    <img className=' w-full object-cover grayscale blur-md' src="https://img.freepik.com/free-vector/flat-spring-background_23-2149252411.jpg" alt="" />

                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className='z-10 absolute top-28 text-black flex-col items-center'>
                        <Button title="404 NOT FOUND" variant="danger" />
                        <div className='mt-24 flex items-center justify-center'>
                            <div>
                                <Link to="/" className='p-3 text-[16px] text-gray-600 font-bold hover:underline'>


                                    Go to Homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                    DV
                </div>



            </div>

        </div>

    )
}

export default NotFound
