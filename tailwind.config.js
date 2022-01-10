module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ['Palanquin', 'sans-serif'],
        serif: ['Spectral', 'serif'],
    },
    typography: {
      DEFAULT: {
        css: {
          "code::before": false,
          "code::after": false,
          "blockquote p:first-of-type::before": false,
          "blockquote p:last-of-type::after": false,
          color: '#333',
          strong: {
            color: '#EF4444',
            fontWeight: '700',
            fontFamily: 'Georgia',
          },
          hr: {
            borderColor: '#FBBF24',
            color: '#FBBF24',
            borderWidth: '2px',
          },
          i: {
              fontWeight: '400',
              color: '#EF4444',
              fontFamily: 'Georgia',
              fontStyle: 'italic',
          },
        em: {
            fontWeight: '400',
            fontFamily: 'Georgia',
            fontStyle: 'italic',
        },
          a: {
            backgroundColor: '#FFFBEB',
            fontWeight: '700',
            color: '#1F2937',
            borderRadius: '5px',
            padding:'3px 3px',
            '&:hover': {
            background: '#FEF2F2',
            color: '#EF4444',
            },
          },
          blockquote: {
            borderLeftColor: '#F59E0B',
            borderLeftWidth: '4px',
            padding: '10px',
            color: '#4B5563',
            backgroundColor: '#FFFBEB',
            borderRadius: '10px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
           },
           code: {
             backgroundColor: '#E5E7EB',
             borderRadius: '5px',
             padding:'3px 6px',
           },
           pre: {
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
           code: {
            backgroundColor: 'transparent',
            borderRadius: '5px',
            padding:'none',
            whiteSpace: 'pre-wrap',
          },
        },
        img: {
            borderRadius: '5px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            display: 'block',
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
        },
        },
      },
    },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography"),],
  purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg", "./src/**/*.md"],
};