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
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/js-lib.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/array/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/array/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/color/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/color/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/dom/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/dom/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/dom-selection/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/dom-selection/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/drag/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/drag/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/icon-canvas/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/icon-canvas/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/icon-svg/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/icon-svg/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/is/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/is/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/math/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/math/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/queue/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/queue/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/selection/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/selection/index.js", format: "esm" }],
	  plugins: plugins
	},
	{
		input: "src/svg-element/index.ts",
		onwarn(warning, warn) {	if (message.code === 'CIRCULAR_DEPENDENCY') return; warn(warning); },
	  output: [{ file: "dist/svg-element/index.js", format: "esm" }],
	  plugins: plugins
	}
];