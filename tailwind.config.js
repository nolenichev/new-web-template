module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				def: "#30F60F",
			},
			fontFamily: {
				title: ["title", "sans-serif"],
				main: ["main", "sans-serif"],
			},
			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
				4: "4 4 0%",
				5: "5 5 0%",
			},
		},
	},
	plugins: [],
}
