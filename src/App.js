import React, { Suspense } from 'react'
import { Loader } from '@react-three/drei'

import Navbar from './components/Navbar'
import Phone from './components/Phone'

const App = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={null}>
                <Phone />
            </Suspense>
            <Loader />
        </>
    )
}

export default App
