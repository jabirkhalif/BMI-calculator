module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'waves' : "url('./src/assets/wave.svg')"
        
      },
      fontFamily:{
        'fredoka' : ['"lobster", cursive;']
      }
    },
  },
  plugins: [],
}
