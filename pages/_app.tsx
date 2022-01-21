import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme"
import GlobalStyles from "../styles/globalStyles"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
