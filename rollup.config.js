/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import path from "path";
import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import del from "rollup-plugin-delete";
import analyze from "rollup-plugin-analyzer";
import { terser } from "rollup-plugin-terser";

const projectRoot = path.resolve(__dirname, ".");
export default {
  input: [
    "./src/Card/index.js", 
    "./src/Form/index.js", 
  ],
  output: [
    {
      dir: "dist",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  preserveModules: true,
  external: ["react", "react-dom", "prop-types", "styled-components"],
  plugins: [
    del({ targets: "dist/*", hook: "buildStart", verbose: false }),
    peerDepsExternal(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx"],
    }),
    resolve({ extensions: [".js", ".jsx"]}),
    terser(),
    analyze()
  ],
};
