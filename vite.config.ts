import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

const resolvePath = (_path) => path.resolve(__dirname, _path)
const contextPath = (mode) => {
    const context = loadEnv(mode, process.cwd()).VITE_APP_PREFIX
    if (context && context !== '' && context !== '/') {
        return `/${context}/`
    }
    return '/'
}


// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
        port: 80,
    },
    base: contextPath(mode),
    resolve: {
        extensions: ['.ts', '.tsx', '.vue'],
        alias: {
            "@": resolvePath('src'),
        }
    }
})
