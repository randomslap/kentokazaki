import React, { useState } from 'react'
import { Button, Card, CardContent, CardMedia, Modal, Typography, Stack } from '@mui/material'

import useWindowSize from '../../hooks/useWindowSize'

const cards = [
    {
        url: 'https://chalkapp.co/',
        title: 'Chalk Esports, Inc.',
        image: '/projects/chalkapp.webp',
        description: 'A mobile app for esports tournaments for all gamers. Built with React Native, Apollo GraphQL, Node.js, and AWS.',
        position: 'Lead Software Engineer',
    },
    {
        url: 'https://www.densocial.io/',
        title: 'Den Social, Inc.',
        image: '/projects/densocial.webp',
        description: 'A mobile app for finding college roommates and friends. Built with React Native, Redux, Node.js, and MongoDB.',
        position: 'Lead React Native Engineer',
    },
    {
        url: 'https://charcuterie-nft.vercel.app',
        title: 'Charcuterie NFT',
        image: '/projects/charcuterie.webp',
        description: 'A Web3 dApp for minting and trading NFTs. Built with React, Redux, Ethers.js, Hardhat.js, Alchemy API, and Typescript.',
        position: 'React/Solidity Engineer',
    },
    {
        url: 'https://itsokay.gg/',
        title: "It's Okay",
        image: '/projects/itsokay.webp',
        description: "A store-front website for It's Okay's merchandise. Built with Next.js, Redux, Apollo GraphQL, and Shopify API.",
        position: 'Full Stack Web Developer',
    },
    {
        url: 'https://react-redux-dapp-template.vercel.app/',
        title: 'React Redux dApp Template',
        image: '/projects/dapp.webp',
        description:
            'A template for single page dApps with a smart contract deployed on Sepolia Testnet. This was written and deployed in a day. Built with React, Redux, Ethers.js, Hardhat.js, Alchemy API, and Typescript.',
        position: 'React/Solidity Engineer',
    },
]

const Popup = ({ open, handleClose, project }) => {
    const { width } = useWindowSize()
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 400, height: width > 768 ? '45%' : '100%' }} color="dark">
                <CardMedia component="img" alt={project?.title} height={350} image={project?.image} draggable={false} />
                <Stack flex flexDirection="column" justifyContent="space-between" sx={{ height: '40%' }}>
                    <Stack flex justifyContent={'space-between'} spacing={1}>
                        <Stack flex justifyContent={'space-between'} height={'35%'}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project?.title}
                                </Typography>
                                <Typography variant="h6" color="text.primary">
                                    {project?.position}
                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary">
                                    {project?.description}
                                </Typography>
                            </CardContent>
                        </Stack>
                    </Stack>
                    <Stack flex flexDirection={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
                        <a href={project?.url} target="_blank">
                            <Button size="large">Open</Button>
                        </a>
                        <Button onClick={handleClose} size="large">
                            Close
                        </Button>
                    </Stack>
                </Stack>
            </Card>
        </Modal>
    )
}
const Portfolio = () => {
    const [open, setOpen] = useState(false)
    const [project, setProject] = useState()
    const handleOpen = (card) => {
        document.querySelector('html').classList.remove('no-cursor')
        document.querySelectorAll('button:not(.navbar-button)').forEach((element) => {
            element.classList.remove('no-cursor')
        })
        setProject(card)
        setOpen(true)
    }
    const handleClose = () => {
        document.querySelector('html').classList.add('no-cursor')
        document.querySelectorAll('button:not(.navbar-button)').forEach((element) => {
            element.classList.add('no-cursor')
        })
        setProject(null)
        setOpen(false)
    }
    return (
        <>
            <Stack spacing={10} marginY={15}>
                {cards.map((card, i) => (
                    <Card sx={{ maxWidth: 300 }} color="dark" key={i}>
                        <CardMedia component="img" alt={card.title} height="190" image={card.image} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {card.description}
                            </Typography>
                        </CardContent>
                        <Stack>
                            <Button className="no-cursor" size="large" onClick={() => handleOpen(card)}>
                                View Details
                            </Button>
                        </Stack>
                    </Card>
                ))}
            </Stack>
            <Popup open={open} handleClose={handleClose} project={project} />
        </>
    )
}

export default Portfolio
