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
					I&apos;m a skilled full-stack software developer with a
					passion for learning new technologies and languages. With
					years of experience, I&apos;ve developed a talent for
					quickly understanding and utilizing new tools and
					frameworks. In just two weeks, I was able to master Solidity
					smart contracts and Web3 deployment, and in the same week
					that my web development course began teaching React basics,
					I was already using Redux. <br />
					<br />I love sharing my knowledge with others in the
					industry and mentoring junior developers. As a leader,
					I&apos;m committed to staying on the cutting edge of new
					developments and continuously honing my skills. Whether
					I&apos;m working on a personal project or collaborating with
					a team, I always strive to deliver high-quality work and
					exceed expectations.
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
	margin-top: 150px;
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
	height: 75%;
	width: 75%;
	margin-left: 50px;
	border-radius: 2px;
	overflow: hidden;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	-webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`

const Title = styled.h2`
	font-size: 32px;
`

const Body = styled.p`
	font-weight: bold;
	font-size: 1.75vh;
`
