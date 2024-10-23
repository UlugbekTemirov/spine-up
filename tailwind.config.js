/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          xl: "6rem"
        }
      },
      borderRadius: {
        main: "12px"
      },
      colors: {
        primary: {
          "DEFAULT": "#9DC41F",
        },
        secondary: {
          "DEFAULT": "#626770",
          "light": "#707461",
          "icon": "#9FA5B0",
        }
      },
      backgroundImage: {
        'home': 'linear-gradient(269.48deg, #EFF3FF 0.41%, #FFF6F3 100.04%)',
        "faq-blue": "linear-gradient(0deg, #EBF1FF 0.41%, #FFFFFF 100.04%)",
        "faq-orange": "linear-gradient(0deg, #FFEDE7 0.41%, #FFFFFF 100.04%)",
        "faq-green": "linear-gradient(0deg, #F5FCDD 0.41%, #FFFFFF 100.04%)",
        "author-method": "linear-gradient(269.48deg, rgba(255, 246, 243, 0.6) 0.41%, rgba(239, 243, 255, 0.6) 53.81%, rgba(252, 255, 243, 0.6) 100.04%)",
        whyus: "linear-gradient(269.48deg, rgba(252, 255, 243, 0.6) 0.41%, rgba(239, 243, 255, 0.6) 46.64%, rgba(255, 246, 243, 0.6) 100.04%)",
        contact: 'linear-gradient(269.48deg, rgba(252, 255, 243, 0.6) 0.41%, rgba(239, 243, 255, 0.6) 46.64%, rgba(255, 246, 243, 0.6) 100.04%)',
        footer: "linear-gradient(269.48deg, rgba(252, 255, 243, 0.6) 0.41%, rgba(239, 243, 255, 0.6) 46.64%, rgba(255, 246, 243, 0.6) 100.04%)",
        sertificate: "linear-gradient(269.48deg, rgba(252, 255, 243, 0.6) 0.41%, rgba(239, 243, 255, 0.6) 46.64%, rgba(255, 246, 243, 0.6) 100.04%)",
        vacancy: "linear-gradient(269.48deg, #EFF3FF 0.41%, #FFF6F3 100.04%)",
      },
      boxShadow: {
        faq: '0px 6px 12px 0px #0000000A',
        team: "0px 9px 18px 0px #0000000F"
      },
      fontFamily: {
        dudka: "Dudka"
      },
      borderImage: {
        gradientBorder: 'linear-gradient(153.46deg, rgba(106, 144, 253, 0.1) 16.52%, rgba(106, 144, 253, 0.5) 36.53%, rgba(106, 144, 253, 0.5) 63.47%, rgba(106, 144, 253, 0.1) 83.21%)',
      },
    },
  },
  plugins: [],
}



