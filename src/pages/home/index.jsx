import React, { useEffect, useState } from 'react'
import { getPost } from '../../services/post'

function Home() {

    const [gameDetail, setGameDatail] = useState(false)


    useEffect(() => {

        getPost().then(res => setGameDatail(res))

    }, [])

    return (

        <>

        </>


    )
}

export default Home
