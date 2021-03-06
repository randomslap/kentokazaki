import type { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"

import Navbar from "../components/Navbar"
import About from "../components/About"
import Carousel from "../components/Carousel"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Kent Okazaki&apos;s Portfolio</title>
				<meta name="description" content="Kent Okazaki's Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Container>
				<About />
				<Carousel />
			</Container>
		</div>
	)
}

export default Home

const Container = styled.div`
	display: flex;
	flex-direction: row;
	z-index: 0;
	min-width: 50%;
	@media (max-width: 1216px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
    min
	}
`
