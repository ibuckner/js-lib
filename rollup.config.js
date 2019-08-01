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

const warn = (warning, rollupWarn) => {
	if (warning.code !== "CIRCULAR_DEPENDENCY") {
		rollupWarn(warning);
	}
};

export default [
	{
		input: "src/index.ts",
		warn,
	  output: [{ file: "dist/js-lib.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/array/index.ts",
		warn,
	  output: [{ file: "dist/array/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/dom-selection/index.ts",
		warn,
	  output: [{ file: "dist/dom-selection/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/is/index.ts",
		warn,
	  output: [{ file: "dist/is/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/selection/index.ts",
		warn,
	  output: [{ file: "dist/selection/index.js", format: "esm" }],
	  plugins: plugins
	}
];