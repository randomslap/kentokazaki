import { useRef } from 'react'
import { Stack, Button, Box } from '@mui/material'

import Hero from './Hero'
import Portfolio from './Portfolio'

const Screen = () => {
    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <Stack flex direction={'column'} alignItems={'center'} spacing={4}>
            <Hero />
            <Box>
                <Button className="no-cursor" onClick={executeScroll} size="large" variant="outlined" style={{ color: 'white', borderColor: 'white' }}>
                    Check out my work
                </Button>
            </Box>
            <div ref={myRef}>
                <Portfolio id="portfolio" />
            </div>
        </Stack>
    )
}

export default Screen
