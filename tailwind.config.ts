import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'react': '#61DBFB',
        'node': '#6cc24a',
        'next': '#FFF',
        'typescript': '#3178c6',
        'javascript': '#f0Db4f',
        'tailwind': '#38bdf8',
        'sass': '#cc6699',
        'prisma': '#123A50',
        'postgresql': '#2F6792',
        'mysql': '#00758F',
        'mongodb': '#00ED64',
        'linux': '#69B53F'
      }
    },
  },
  plugins: [],
}
export default config
