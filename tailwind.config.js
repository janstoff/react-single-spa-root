/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0D1F3D'
                },
                grey: {
                    DEFAULT: '#465C6F',
                    medium: '#808F9A',
                    light: '#A1B3C1',
                    lighter: '#E2E8EE',
                    lightest: '#FAFBFC',
                    tint: '#F9FAFC',
                    hover: '#E2E8EE',
                    gainsboro: '#F8F9FD'
                },
                green: {
                    DEFAULT: '#53cdb5'
                }
            },
            fontSize: {
                xxs: ['10px', '13px']
            }
        }
    },
    plugins: []
};
