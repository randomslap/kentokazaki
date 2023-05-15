import React from "react"
import Image from "next/image"
import styled from "styled-components"

import Project from "./Project"

import type { project } from "../types"

const projects: project[] = [
	{
		url: "https://chalkapp.co/",
		title: "Chalk App",
		image: "/projects/chalkapp.png",
		description:
			"A mobile app for esports tournaments for all gamers. Built with React Native, Apollo GraphQL, Node.js, and AWS.",
		position: "Lead Software Engineer",
	},
	{
		url: "https://www.densocial.io/",
		title: "Den Social",
		image: "/projects/densocial.png",
		description:
			"A mobile app for finding college roommates and friends. Built with React Native, Redux, Node.js, and MongoDB.",
		position: "Lead React Native Engineer",
	},
	{
		url: "https://charcuterie-nft.vercel.app",
		title: "Charcuterie NFT",
		image: "/projects/charcuterie.png",
		description:
			"A Web3 dApp for minting and trading NFTs. Built with React, Redux, Ethers.js, Hardhat.js, Alchemy API, and Typescript.",
		position: "React/Solidity Engineer",
	},
	{
		url: "https://itsokay.gg/",
		title: "It's Okay",
		image: "/projects/itsokay.png",
		description:
			"A store-front website for It's Okay's merchandise. Built with Next.js, Redux, Apollo GraphQL, and Shopify API.",
		position: "Full Stack Web Developer",
	},
	{
		url: "https://react-redux-dapp-template.vercel.app/",
		title: "React Redux dApp Template",
		image: "/projects/dapp.png",
		description:
			"A template for single page dApps with a smart contract deployed on Sepolia Testnet. This was written and deployed in a day. Built with React, Redux, Ethers.js, Hardhat.js, Alchemy API, and Typescript.",
		position: "React/Solidity Engineer",
	},
]

const Carousel: React.FC = () => {
	return (
		<Container>
			{projects.map((_project, i) => (
				<Project
					key={i}
					title={_project.title}
					description={_project.description}
					url={_project.url}
					image={_project.image}
					position={_project.position}
				/>
			))}
		</Container>
	)
}

export default Carousel

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	padding-top: 130px;
`
