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
			"A mobile app for Esport tournaments. Built with React Native, Apollo GraphQL, and AWS.",
		position: "Lead Full Stack Developer",
	},
	{
		url: "https://react-redux-dapp-template.vercel.app/",
		title: "React Redux dApp Template",
		image: "/projects/dapp.png",
		description:
			"A template for single page dApps with a smart contract deployed on Rinkeby Testnet. This was written and deployed in a day. Built with React, Redux, Ethers.js, Hardhat.js, Alchemy API, and Typescript.",
		position: "Web3/Solidity Developer",
	},
	{
		url: "https://www.densocial.io/",
		title: "Den Social",
		image: "/projects/densocial.png",
		description:
			"A mobile app for finding college roommates and friends. Built with React Native, Redux, Node.js, and MongoDB.",
		position: "Full Stack Developer",
	},
	{
		url: "https://itsokay.gg/",
		title: "It's Okay",
		image: "/projects/itsokay.png",
		description:
			"A store-front website for It's Okay's merchandise. Built with Next.js, Redux, Apollo GraphQL, and Shopify API.",
		position: "Full Stack Web Developer",
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
	padding-top: 200px;
`
