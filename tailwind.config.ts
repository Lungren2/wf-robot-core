import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
				display: ['Oswald', 'Montserrat', 'ui-sans-serif'],
			},
			colors: {
				// WF Robot brand colors using semantic tokens
				bg: 'hsl(var(--wf-bg) / <alpha-value>)',
				fg: 'hsl(var(--wf-fg) / <alpha-value>)',
				'wf-muted': 'hsl(var(--wf-muted) / <alpha-value>)',
				'wf-border': 'hsl(var(--wf-border) / <alpha-value>)',
				'wf-card': 'hsl(var(--wf-card) / <alpha-value>)',
				'wf-card-fg': 'hsl(var(--wf-card-foreground) / <alpha-value>)',
				'wf-green': 'hsl(var(--wf-green) / <alpha-value>)',
				'wf-yellow': 'hsl(var(--wf-yellow) / <alpha-value>)',
				'wf-red': 'hsl(var(--wf-red) / <alpha-value>)',
				'wf-ring': 'hsl(var(--wf-ring) / <alpha-value>)',
				
				// Semantic state colors
				success: 'hsl(var(--wf-green) / <alpha-value>)',
				warning: 'hsl(var(--wf-yellow) / <alpha-value>)',
				danger: 'hsl(var(--wf-red) / <alpha-value>)',
				brand: 'hsl(var(--wf-fg) / <alpha-value>)',

				// Legacy compatibility
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 8px)',
			},
			boxShadow: {
				card: '0 6px 24px -8px hsl(var(--wf-fg) / 0.15)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				pulseDot: {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' },
				},
				fadeIn: {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-dot': 'pulseDot 1.2s ease-in-out infinite',
				'fade-in': 'fadeIn 0.3s ease-out',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/container-queries"),
	],
} satisfies Config;
