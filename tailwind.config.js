/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'monospace']
			},
			colors: {
				surface: {
					0: '#0a0a0f',
					1: '#0f0f17',
					2: '#14141e',
					3: '#1a1a26',
					4: '#20202e'
				},
				accent: {
					DEFAULT: '#6366f1',
					hover: '#818cf8',
					muted: '#4f46e5'
				},
				cyan: {
					glow: '#06b6d4'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
				'glow-pulse': 'glowPulse 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'grid-fade': 'gridFade 8s ease-in-out infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-24px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				glowPulse: {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.8' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				gridFade: {
					'0%, 100%': { opacity: '0.03' },
					'50%': { opacity: '0.07' }
				}
			},
			backdropBlur: {
				xs: '2px'
			},
			boxShadow: {
				'glow-sm': '0 0 20px rgba(99, 102, 241, 0.15)',
				'glow-md': '0 0 40px rgba(99, 102, 241, 0.2)',
				'glow-lg': '0 0 80px rgba(99, 102, 241, 0.25)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)'
			}
		}
	},
	plugins: []
};
