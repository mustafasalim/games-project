import React from 'react'
import { useEffect, useState } from 'react'
import { getPost } from '../../services/post'
import { Link } from 'react-router-dom'
import useGenerateRandomColor from '../../components/randomColor'

function Social() {
    const { color, generateColor } = useGenerateRandomColor();
    const [gameDetail, setGameDatail] = useState(false)
    useEffect(() => {

        getPost().then(res => setGameDatail(res))

    }, [])

    return (
        <div className='mt-10 flex flex-wrap justify-center'>
            {gameDetail && gameDetail.map(users => (

                <div>
                    {users.genre === "Social" && (
                        <Link to={users.game_url}>
                            <button
                                style={{
                                    backgroundColor: "#" + color
                                }}
                                onMouseOver={generateColor} className='w-[400px] m-5  rounded-md overflow-hidden relative'>
                                <img className='w-full h-full object-cover transition-all hover:translate-x-2 hover:-translate-y-2' src={users.thumbnail} alt="" />

                                <div className='absolute bottom-0 right-0 px-4 bg-gray-800'>
                                    {users.platform}
                                </div>

                            </button>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Social
