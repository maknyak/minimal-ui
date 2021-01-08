/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import del from "rollup-plugin-delete";

export default {
  input: ["./src/index.js"],
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
    resolve({
      extensions: [".js", ".jsx"],
    }),
  ],
};
