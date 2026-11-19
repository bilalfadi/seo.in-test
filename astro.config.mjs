import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
export default defineConfig({site:'https://seogroupbuy.in',output:'static',trailingSlash:'never',srcDir:'./astro',publicDir:'./public',integrations:[react()],vite:{plugins:[tailwindcss()],resolve:{alias:{'@':path.resolve('.') }}}});
