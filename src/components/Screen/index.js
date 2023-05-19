import { useRef } from 'react'
import { Stack, Button, Box, IconButton, Fade } from '@mui/material'

import SettingsIcon from '@mui/icons-material/Settings'

import Hero from './Hero'
import Portfolio from './Portfolio'

import useWindowSize from '../../hooks/useWindowSize'

const Screen = ({ drag, handleOpen }) => {
    const myRef = useRef(null)
    const { width } = useWindowSize()

    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' })

    return (
        <>
            <Stack flex direction={'column'} alignItems={'center'} spacing={1} marginTop={5}>
                {width > 768 && (
                    <Box width="90%">
                        <IconButton className="no-cursor" style={{ color: 'white' }} onClick={handleOpen}>
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                )}
                <Hero />
                {width > 768 && (
                    <Stack alignItems="center" justifyContent="center" textAlign="center" spacing={0} paddingBottom={10}>
                        <Fade in style={{ transitionDelay: '1600ms' }}>
                            <h4>How to navigate:</h4>
                        </Fade>
                        <Fade in style={{ transitionDelay: '1700ms' }}>
                            <p style={{ margin: 0 }}>Use the fingertip to click</p>
                        </Fade>
                        <Fade in style={{ transitionDelay: '1800ms' }}>
                            <p style={{ margin: 0 }}>{!drag ? 'Use scrollwheel' : 'Click and drag'} to scroll</p>
                        </Fade>
                        <Fade in style={{ transitionDelay: '1900ms' }}>
                            <p style={{ margin: 0 }}>Hold click to zoom</p>
                        </Fade>
                    </Stack>
                )}
                <Box>
                    <Button className="no-cursor" onClick={executeScroll} size="large" variant="outlined" style={{ color: 'white', borderColor: 'white' }}>
                        Check out my work
                    </Button>
                </Box>
                <div ref={myRef}>
                    <Portfolio id="portfolio" />
                </div>
            </Stack>
        </>
    )
}

export default Screen
