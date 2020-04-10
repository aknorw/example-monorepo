import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.module,
      format: "esm",
      sourcemap: false,
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve({
      extensions: [".js", ".json"],
    }),
    commonjs(),
  ],
};
