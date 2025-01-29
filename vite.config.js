//  ********************************************
//  **********  /02-apps-react-vite/  **********
//  **********  /vite.config.js  ***************
//  ********************************************


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';


// Define __dirname para trabajar con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': resolve(__dirname, './src/components'),
        },
    },
});
