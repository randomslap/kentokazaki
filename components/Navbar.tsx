import React from "react"
import Image from "next/image"
import styled from "styled-components"

const Navbar: React.FC = () => {
	return (
		<Container>
			<SubContainer>
				<StyledH1>Kent Okazaki</StyledH1>
			</SubContainer>
			<SubContainer>
				<ImageContainer
					href="https://github.com/randomslap"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/icons/github/GitHub-Mark-120px-plus.png"
						alt="Github"
						height={30}
						width={30}
					/>
				</ImageContainer>
				<ImageContainer
					href="https://www.linkedin.com/in/kentokazaki"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/icons/linkedin/LI-In-Bug.png"
						alt="Github"
						height={30}
						width={30}
					/>
				</ImageContainer>
			</SubContainer>
		</Container>
	)
}

export default Navbar

const Container = styled.div`
	position: fixed;
	z-index: 10;
	display: flex;
	flex-direction: row;
	min-width: 50%;
	height: 100px;
	padding: 10px 10px;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	-webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	@media (max-width: 1216px) {
		width: 100%;
	}
`

const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-width: 210px;
	height: 100px;
	margin-left: 30px;
	@media (max-width: 1216px) {
		margin: 0px 20px;
		min-width: 100px;
	}
`

const StyledH1 = styled.h1`
	color: black;
`

const ImageContainer = styled.a`
	margin: 0px 10px;
`
