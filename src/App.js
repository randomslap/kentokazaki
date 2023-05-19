import React, { Suspense } from 'react'
import { Loader } from '@react-three/drei'

import useWindowSize from './hooks/useWindowSize'

import Navbar from './components/Navbar'
import Phone from './components/Phone'

const App = () => {
    const screenSize = useWindowSize()
    return (
        <>
            {screenSize.width > 768 && <Navbar />}
            <Suspense fallback={null}>
                <Phone />
            </Suspense>
            <Loader />
        </>
    )
}

export default App
