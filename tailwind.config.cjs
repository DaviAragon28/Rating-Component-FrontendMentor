
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bgColor: '#121417',
				lightGray: '#959eac',
				mediumGray: '#7c8798',
				darkBlue: '#252d37',
				unkwonColor: '#273039',
				primary: '	#fb7413'
			}
		},
	},
	plugins: [],
}
