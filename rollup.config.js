import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
        },
        {
            file: "dist/index.cjs.js",
            format: "cjs",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json", jsx: "react-jsx" }),
        postcss({
            extract: "styles.css", // extract CSS to separate file
            minimize: true,
            modules: false,
        }),
    ],
    external: ["react", "react-dom"],
};
