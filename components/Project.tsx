import React from "react"
import Image from "next/image"
import styled from "styled-components"

import type { project } from "../types"

const Project: React.FC<project> = ({
	title,
	description,
	url,
	image,
	position,
}) => {
	return (
		<Container href={url} target="_blank" rel="noreferrer">
			<Title>{title}</Title>
			<Image
				src={image}
				height={500}
				width={500}
				alt={title}
				layout="responsive"
				quality={100}
			/>
			<SubTitle>{position}</SubTitle>
			<Body>{description}</Body>
		</Container>
	)
}
export default Project

const Container = styled.a`
	width: 500px;
	height: 700px;
	padding-bottom: 20px;
	margin-bottom: 50px;
	border: solid #bdbdbd 1px;
	border-radius: 2px;
	text-decoration: none;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	-webkit-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
	&:visited {
		text-decoration: none;
		color: black;
	}
	&:hover {
		opacity: 0.5;
		transition: all 0.3s ease;
	}
	@media (max-width: 1216px) {
		width: 350px;
		height: 575px;
		padding-bottom: 30px;
	}
`

const Title = styled.h2`
	text-align: center;
`

const SubTitle = styled.h3`
	padding: 0px 20px;
`

const Body = styled.p`
	font-weight: bold;
	padding: 0px 20px;
`
