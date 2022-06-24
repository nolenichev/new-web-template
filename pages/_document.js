import { Html, Head, Main, NextScript } from "next/document"

export const title = "Template"
const description = "Template"

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.cdnfonts.com/css/pixel12x10"
					rel="stylesheet"
					crossOrigin="true"
				/>
				<meta name="title" content={title} />
				<meta name="og:title" content={title} />
				<meta name="twitter:title" content={title} />
				<meta name="description" content={description} />
				<meta name="og:description" content={description} />
				<meta name="twitter:description" content={description} />
				<meta name="keywords" content="" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
