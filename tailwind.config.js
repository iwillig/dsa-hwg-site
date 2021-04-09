module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'mobile': '375px',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1440px',
      // => @media (min-width: 1280px) { ... }

      'desktop': '1920px',
      // => @media (min-width: 1280px) { ... }

    },

    extend: {
      colors: {

        'primary': '#EC1F27',
  
        'secondary': '#FBD2D4',
  
        'highlight': '#BC1016',
  
      },
      
    fontSize: {
      'body': ['16px', {
        letterSpacing: '-0.00em',
        lineHeight: '22.4px',
      }],
      'subheader': ['28px', {
        letterSpacing: '-.03em',
        lineHeight: '30.8px',
      }],
      'subheader-mobile': ['20px', {
        letterSpacing: '-.02em',
        lineHeight: '24px',
      }],
      'header': ['48px', {
        letterSpacing: '-.05em',
        lineHeight: '48px',
      }],
      'header-mobile': ['32px', {
        letterSpacing: '-.03em',
        lineHeight: '32px',
      }],
      'title375': ['64px', {
        letterSpacing: '-.06em',
        lineHeight: '57.6px',
      }],
      'title768': ['64px', {
        letterSpacing: '-.06em',
        lineHeight: '57.6px',
      }],
      'title1024': ['88px', {
        letterSpacing: '-.07em',
        lineHeight: '79.2px',
      }],
      'title1440': ['120px', {
        letterSpacing: '-.00em',
        lineHeight: '108px',
      }],
      'title1920': ['154px', {
        letterSpacing: '-.00em',
        lineHeight: '136px',
      }],
      'navbar': ['16px', {
        letterSpacing: '.01em',
        lineHeight: '20.8px',
      }]

      }


    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}