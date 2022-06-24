import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import Social from "./Social"
import Menu from "../data/menu.json"
import MenuIcon from "../img/icons/menu.svg"

function Header({}) {
	const [isOpenMenu, setIsOpenMenu] = useState(false)
	const router = useRouter()

	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu)
	}

	const links = Menu.map((item, index) => {
		const isLinkActive = router.pathname == `/${item.link}` ? "text-def" : ""

		return (
			<Link href={`/${item.link}`} key={index}>
				<a className={`hover:text-def transition ${isLinkActive}`}>
					{item.title}
				</a>
			</Link>
		)
	})

	return (
		<>
			<header className="cont hidden py-5 justify-between gap-3 items-center md:flex sticky top-0 left-0 right-0 z-20">
				<div className="flex gap-4 lg:gap-7 whitespace-nowrap absolute left-1/2 transform -translate-x-1/2">
					{links}
				</div>
				<Social />
			</header>

			{/* Mobile Menu */}
			<div className="flex top-0 p-5 left-0 right-0 justify-between z-40 items-center md:hidden fixed">
				<div>logo</div>
				<button onClick={toggleMenu}>
					<Image src={MenuIcon} alt="menu" className="relative w-10" />
				</button>
			</div>
			{isOpenMenu && (
				<div className="fixed top-0 left-0 right-0 z-30 bg-white block md:hidden pt-28 pb-12 shadow-xl backdrop-blur-xl bg-opacity-80">
					<nav className="cont flex flex-col gap-5 items-center text-2xl font-main">
						{links}
					</nav>
					<div className="flex justify-center mt-10">
						<Social />
					</div>
				</div>
			)}
		</>
	)
}

export default Header
