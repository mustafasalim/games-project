import React from 'react'
import { useEffect, useState } from 'react'
import { getPost } from '../../services/post'
import { Link } from 'react-router-dom'
import useGenerateRandomColor from '../../components/randomColor'

function Arpg() {
    const { color, generateColor } = useGenerateRandomColor();
    const [gameDetail, setGameDatail] = useState(false)
    useEffect(() => {

        getPost().then(res => setGameDatail(res))

    }, [])

    return (
        <div className='flex flex-wrap justify-center'>
            {gameDetail && gameDetail.map(users => (

                <div>
                    {users.genre === "ARPG" && (
                        <Link to={users.game_url}>
                            <div className='shadow-2xl m-5'>
                                <div
                                    style={{
                                        backgroundColor: "#" + color
                                    }}
                                    onMouseOver={generateColor} className='w-[400px]  rounded-md overflow-hidden relative'>
                                    <img className='w-full h-full object-cover transition-all hover:grayscale hover:translate-x-2 hover:-translate-y-2' src={users.thumbnail} alt="" />



                                </div>
                            </div>

                        </Link>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Arpg
