import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			heading: [
				'"Libre Baskerville"',
				'ui-serif',
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif'
			],
			body: [
				'"Open Sans"',
				'ui-sans-serif',
				'system-ui',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"'
			],
			accent: ['"Roboto"', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				brand: {
					'50': '#f2f8f9',
					'100': '#deedef',
					'200': '#c1dae0',
					'300': '#96bfca',
					'400': '#649dad',
					'500': '#488192',
					'600': '#3e6b7c',
					'700': '#385866',
					'800': '#344b56',
					'900': '#2f414a',
					'950': '#1b2931',
					DEFAULT: '#649dad',
					variable: 'rgb(var(--brand-primary) / <alpha-value>)',
					'variable-alt': 'rgb(var(--brand-primary-alt) / <alpha-value>)',
					'variable-text': 'rgb(var(--brand-primary-text) / <alpha-value>)'
				},
				accent: {
					'50': '#f9f6f9',
					'100': '#f4eff3',
					'200': '#ebdfe9',
					'300': '#dcc5d6',
					'400': '#c19ab7',
					'500': '#b183a4',
					'600': '#9a6889',
					'700': '#825471',
					'800': '#6d475e',
					'900': '#5c3f51',
					'950': '#36212e',
					DEFAULT: '#c19ab7',
					variable: 'rgb(var(--brand-accent) / <alpha-value>)',
					'variable-alt': 'rgb(var(--brand-accent-alt) / <alpha-value>)',
					'variable-text': 'rgb(var(--brand-accent-text) / <alpha-value>)'
				},
				surface: {
					background: 'rgb(var(--background) / <alpha-value>)',
					DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
					'1': 'rgb(var(--surface-1) / <alpha-value>)',
					'2': 'rgb(var(--surface-2) / <alpha-value>)',
					'3': 'rgb(var(--surface-3) / <alpha-value>)',
					'4': 'rgb(var(--surface-4) / <alpha-value>)',
					'5': 'rgb(var(--surface-5) / <alpha-value>)',
					success: `rgb(var(--success-surface) / <alpha-value>)`,
					error: `rgb(var(--error-surface) / <alpha-value>)`,
					warning: `rgb(var(--warning-surface) / <alpha-value>)`,
					info: `rgb(var(--info-surface) / <alpha-value>)`
				},
				tc: {
					DEFAULT: 'rgb(var(--text-1) / <alpha-value>)',
					'1': 'rgb(var(--text-1) / <alpha-value>)',
					'2': 'rgb(var(--text-2) / <alpha-value>)',
					'3': 'rgb(var(--text-3) / <alpha-value>)',
					'4': 'rgb(var(--text-4) / <alpha-value>)',
					'5': 'rgb(var(--text-5) / <alpha-value>)'
				},
				success: `rgb(var(--success) / <alpha-value>)`,
				error: `rgb(var(--error) / <alpha-value>)`,
				warning: `rgb(var(--warning) / <alpha-value>)`,
				info: `rgb(var(--info) / <alpha-value>)`,
				gold: {
					'50': '#ffffe7',
					'100': '#feffc1',
					'200': '#fffd86',
					'300': '#fff441',
					'400': '#ffe60d',
					'500': '#ffd700',
					'600': '#d19e00',
					'700': '#a67102',
					'800': '#89580a',
					'900': '#74480f',
					'950': '#442604'
				},
				'royal-blue': {
					'50': '#f1f4fd',
					'100': '#dfe7fa',
					'200': '#c5d5f8',
					'300': '#9ebbf2',
					'400': '#7097ea',
					'500': '#4169e1',
					'600': '#3957d7',
					'700': '#3044c5',
					'800': '#2d39a0',
					'900': '#29347f',
					'950': '#1d224e'
				},
				development: {
					'50': '#edffe6',
					'100': '#c4ffb2',
					'200': '#adff97',
					'300': '#7afb5b',
					'400': '#4ef12a',
					'500': '#2cd70b',
					'600': '#1dac04',
					'700': '#188308',
					'800': '#18670d',
					'900': '#175710',
					'950': '#053102',
					DEFAULT: '#C4FFB2'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
