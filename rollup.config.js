import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

const plugins = [
	resolve(),
	commonjs(),
	typescript({
		typescript: require("typescript"),
		objectHashIgnoreUnknownHack: true,
	}),
];

export default [
	{
		input: "src/index.ts",
		onwarn(warning, rollupWarn) { if (warning.code !== "CIRCULAR_DEPENDENCY") { rollupWarn(warning)} },
	  output: [{ file: "dist/js-lib.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/array/index.ts",
		onwarn(warning, rollupWarn) { if (warning.code !== "CIRCULAR_DEPENDENCY") { rollupWarn(warning)} },
	  output: [{ file: "dist/array/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/selection/index.ts",
		onwarn(warning, rollupWarn) { if (warning.code !== "CIRCULAR_DEPENDENCY") { rollupWarn(warning)} },
	  output: [{ file: "dist/selection/index.js", format: "esm" }],
	  plugins: plugins
	}
];