import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"

const WEBSITE_NAME = "Template"

export default function MainLayout({
	children,
	title,
	hasHeader = true,
	hasFooter = true,
}) {
	title = title ? `${WEBSITE_NAME} | ${title}` : WEBSITE_NAME

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="og:image" content="" />
				<meta name="twitter:image" content="" />
				<meta property="og:image:width" content="400" />
				<meta property="og:image:height" content="400" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			{hasHeader && <Header />}
			<main className="cont">{children}</main>
			{hasFooter && <Footer />}
		</>
	)
}
