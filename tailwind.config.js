/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
      screens: {
        "xl": "1150px",
        "lmd": "850px",
        "tab": "950px",
        "ltab": "1100px",
        "xxl": "1210px",
        "3xl": "1380px",
        "lmobile": "550px",
        "mobile": "450px",
        "smobile": "350px"
      },
  		colors: {
  			background: 'hsl(var(--background))',
  			headerBackground: 'rgb(242,242,242)',
  			icon: '#687076',
  			tabIconDefault: '#687076',
  			buttonGray: '#F0F0F0',
  			profileSectionBG: '#F0F0F0',
  			modalBG: '#fff',
  			BottomSheetHandleGray: '#F0F0F0',
  			primaryBlue: '#1470F9',
  			gray: '#CDC7C7',
  			textGray: '#CDC7C7',
  			tabBackground: '#BEC1C4',
  			lightGray: '#E8E8E8',
  			alternateGray: '#000000BF',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			lightPrimary: '#C67B93',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			lightSecondary: '#FBE4E8',
  			tagBg: '#FFEFCE',
  			tagText: '#FFAC00',
  			constantAlternateGray: '#000000BF',
  			successGreen: '#067647',
  			lightGreen: '#ABEFC6',
  			paleGreen: '#ECFDF3',
  			dangerRed: '#D92D20',
  			paleRed: '#FEF3F2',
  			spinner: '#780023',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

