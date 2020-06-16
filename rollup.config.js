import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const plugins = [
	resolve(),
	terser()
];

function onwarn(warning) {
	if (message.code === 'CIRCULAR_DEPENDENCY') {
		return;
	}
	warn(warning);
}

export default [
	{
		input: "packages/all/build/js-lib.js",
		onwarn,
	  output: [
			{
				file: "packages/all/lib/js-lib.js",
				format: "es"
			},
			{
				file: "packages/all/lib/js-lib.min.js",
				format: "es"
			},
		],
	  plugins: plugins
	}
];