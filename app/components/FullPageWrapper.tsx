"use client"
import ReactFullpage from "@fullpage/react-fullpage"
import React, { useEffect } from "react"

interface Props {
	children: React.ReactNode
}

const FullPageWrapper: React.FC<Props> = ({ children }) => {
	useEffect(() => {
		console.log(process.env.NEXT_PUBLIC_LICENSEKEY)
	}, [])
	return (
		<ReactFullpage
			credits={{ enabled: false }}
			licenseKey={process.env.NEXT_PUBLIC_LICENSEKEY}
			render={() => (
				<ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>
			)}
		/>
	)
}

export default FullPageWrapper
