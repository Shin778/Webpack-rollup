import scss from "rollup-plugin-scss";

export default {
    input: "./src/index.js",
    output: {
      file: "./bundle/my-first-rollup.bundle.js",
      format: "esm", 
    },
    plugins: [
      scss({
        output: "./bundle/style.css",
        failOnError: true,
        runtime: require("sass"),
      }),
    ],
  };