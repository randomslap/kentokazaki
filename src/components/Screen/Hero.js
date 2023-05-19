import React, { useState, useEffect } from 'react'
import { Avatar, IconButton, Fade, Stack } from '@mui/material'
import TextTransition, { presets } from 'react-text-transition'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import useWindowSize from '../../hooks/useWindowSize'

const TEXTS = ['Kent Okazaki', 'a Mobile App Developer', 'a Full-Stack Developer', 'a software nerd']

const Hero = () => {
    const [index, setIndex] = useState(0)
    const { width } = useWindowSize()
    useEffect(() => {
        const intervalId = setInterval(() => setIndex((index) => index + 1), 3000)
        return () => clearTimeout(intervalId)
    }, [])

    return (
        <Stack
            justifyContent="flex-start"
            alignItems="center"
            height={width > 768 ? 400 : '80vh'}
            width={'100%'}
            paddingTop={5}
            spacing={1}
            flexDirection={'column'}>
            <Fade in style={{ transitionDelay: '500ms' }}>
                <h4>Hi there!</h4>
            </Fade>
            <Fade in style={{ transitionDelay: '600ms' }}>
                <Avatar alt="Kent Okazaki" src="https://avatars.githubusercontent.com/u/12478668?v=4" sx={{ width: 126, height: 126 }} draggable={false} />
            </Fade>
            <Fade in style={{ transitionDelay: '700ms' }}>
                <Stack alignItems="center" justifyContent="center" textAlign="center" direction={'row'} spacing={0.75}>
                    <h3 style={{ marginLeft: 0 }}>I'm</h3>
                    <h3>
                        <TextTransition inline springConfig={presets.molasses}>
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition>
                    </h3>
                </Stack>
            </Fade>
            <Stack flex flexDirection={'row'}>
                <Fade in style={{ transitionDelay: '1000ms' }}>
                    <IconButton href="https://github.com/randomslap" target="_blank" className="no-cursor" style={{ color: 'white' }}>
                        <GitHubIcon style={{ fontSize: 50 }} />
                    </IconButton>
                </Fade>

                <Fade in style={{ transitionDelay: '1300ms' }}>
                    <IconButton href="https://www.linkedin.com/in/kentokazaki/" target="_blank" className="no-cursor" style={{ color: 'white' }}>
                        <LinkedInIcon style={{ fontSize: 60 }} />
                    </IconButton>
                </Fade>
            </Stack>
        </Stack>
    )
}

export default Hero
