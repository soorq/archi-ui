import pgk from "./package.json" assert { type: "json" };
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import tailwindcss from 'tailwindcss';
import url from "@rollup/plugin-url";
import dts from "rollup-plugin-dts";
import svgr from "@svgr/rollup";

const twCfg = require('./tailwind.config.js')

/** @type {import('rollup').RollupOptions} */
const config = [
    {
        input: "src/index.ts",
        output: [
            {
                file: pgk.module,
                format: "cjs",
            },
            {
                file: pgk.main,
                format: "esm",
            },
        ],
        external: ["react"],
        plugins: [
            typescript({
                tsconfig: "./tsconfig.json",
                exclude: ["**/*.stories.tsx"],
            }),
            postcss({
                config: {
                    path: "./postcss.config.js",
                },
                extensions: [".css"],
                minimize: true,
                inject: {
                    insertAt: "top",
                },
                plugins: [tailwindcss(twCfg)]
            }),
            svgr({ icon: true }),
            commonjs(),
            terser(),
            url(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: pgk.types, format: "esm" }],
        external: [
            /\.(css|less|scss)$/
        ],
        plugins: [dts.default()],
    },
];

export default config;
