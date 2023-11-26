import React from 'react'
import Button from '../Button'

function Slider() {
    return (
        <div className='w-full h-[293px] flex items-center justify-center bg-[#1c1e22]'>


            <div className='w-[1500px] h-full bg-contain bg-[#1c1e22] bg-top bg-[url("https://www.freetogame.com/assets/images/paladins.png")] bg-no-repeat '>
                <div className='flex justify-center mt-10'>
                    <div className='font-bold text-[40px]'>

                        Play the best <a className='text-cyan-500 underline' href="">free-to-play</a> games
                    </div>


                </div>
                <div className='text-stone-500 flex items-center justify-center'>

                    <div className='text-[20px]'>

                        You are in the best place to play the best games for free, start exploring.
                    </div>

                </div>

                <div className='flex items-center justify-center mt-16'>
                    <Button title="Get Started" variant="danger" />
                </div>

            </div>





        </div>
    )
}

export default Slider
