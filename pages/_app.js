import NextNProgress from "nextjs-progressbar"
import Script from "next/script"
import "../styles/globals.css"

const GOOGLE_ANALYTIC_CODE = ""

function MyApp({ Component, pageProps }) {
	return (
		<>
			{GOOGLE_ANALYTIC_CODE && (
				<>
					<Script
						strategy="lazyOnload"
						src={`https://www.googletagmanager.com/gtag/js?id=G-${GOOGLE_ANALYTIC_CODE}`}
					/>
					<Script strategy="lazyOnload" id="g-analytics">
						{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				
					gtag('config', 'G-${GOOGLE_ANALYTIC_CODE}');
				`}
					</Script>
				</>
			)}

			<NextNProgress
				color="#C01E27"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
