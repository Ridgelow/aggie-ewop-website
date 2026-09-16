/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#18131C',
        ink2: '#3B1E4D',
        muted: '#5B5560',
        faint: '#8A8390',
        paper: '#FBF9FA',
        'pink-wash-1': '#FDEEF4',
        'pink-wash-2': '#F6EEF3',
        line: '#E3DDE2',
        rose: '#E9267C',
        'rose-tint': '#FCEAF2',
        violet: '#7B3F9E',
        'violet-tint': '#F3EEF7',
        sky: '#1C99C2',
        'sky-tint': '#EAF6F9',
        fundraising: '#A31E63',
        'fundraising-tint': '#FBE9EF',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Karla', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['Newsreader', 'Georgia', 'serif'],
      },
      backgroundImage: {
        brand: 'linear-gradient(135deg, #E9267C 0%, #7B3F9E 52%, #1C99C2 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .8s cubic-bezier(.16,1,.3,1) both',
      },
    },
  },
  plugins: [],
};
