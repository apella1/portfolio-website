/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	  extend: {
		  backgroundImage: {
			  'hero': "url('./public/static/images/bg.jpg')"
		  }
	  },
  },
  plugins: [],
}
