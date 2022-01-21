import React, { useEffect, useState } from "react"
import Image from "next/image"
import styled from "styled-components"
import moment from "moment"

const About: React.FC = () => {
	const [age, setAge] = useState(0)
	useEffect(() => {
		const years = moment().diff("1998-01-09", "years")
		setAge(years)
	}, [])
	return (
		<Container>
			<SubContainer>
				<Title>About Me</Title>
				<ImageContainer>
					<Image
						src="/profile.jpg"
						alt="Kent Okazaki"
						height={1}
						width={1}
						layout="responsive"
						objectFit="cover"
						quality={100}
					/>
				</ImageContainer>
				<Body>
					I am a {age} year old full stack software developer. Over
					the years as a software developer, I have always pursued to
					learn new libraries and languages. I can easily understand a
					new technology within weeks. For example, I learned how to
					write and deploy Solidity smart contracts and Web3 in two
					weeks. At my web development course in 2019, I understood
					how to utilize Redux in the same week they started teaching
					the basics of React. One of my favorite things to do is to
					share my knowledge with others in this industry. As a leader
					and a developer, I will continue to strive in learning and
					sharpening new skills.
				</Body>
			</SubContainer>
		</Container>
	)
}

export default About

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	margin-top: 200px;
`

const SubContainer = styled.div`
	position: fixed;
	width: 500px;
	@media (max-width: 1216px) {
		position: relative;
		width: 350px;
	}
`

const ImageContainer = styled.div`
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	-webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`

const Title = styled.h2``

const Body = styled.p`
	font-weight: bold;
	font-size: 1.75vh;
`
