import React, { useState, useEffect } from 'react'
import { Avatar, Container, Fade, Stack } from '@mui/material'
import TextTransition, { presets } from 'react-text-transition'

const TEXTS = ['Kent Okazaki', 'a Full-Stack Developer', 'a Mobile App Developer', 'a software nerd']

const Hero = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <Stack container justifyContent="flex-start" alignItems="center" height={700} width={'100%'} paddingTop={20} spacing={1} flexDirection={'column'}>
      <Fade in style={{ transitionDelay: '500ms' }}>
        <h4>Hi there!</h4>
      </Fade>
      <Fade in style={{ transitionDelay: '300ms' }}>
        <Avatar alt="Kent Okazaki" src="https://avatars.githubusercontent.com/u/12478668?v=4" sx={{ width: 126, height: 126 }} />
      </Fade>
      <Fade in style={{ transitionDelay: '700ms' }}>
        <Stack container alignItems="center" justifyContent="center" textAlign="center" direction={'row'} spacing={0.75}>
          <h3 style={{ marginLeft: index === 0 ? index : -55 }}>I'm</h3>
          <h3>
            <TextTransition inline springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h3>
        </Stack>
      </Fade>
    </Stack>
  )
}

export default Hero
