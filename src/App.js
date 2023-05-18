import React, { Suspense } from 'react'
import { Loader } from '@react-three/drei'

import Phone from './components/Phone'

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Phone />
      </Suspense>
      <Loader />
    </>
  )
}

export default App
