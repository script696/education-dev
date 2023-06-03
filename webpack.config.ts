import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths, BuildType } from "./config/build/types/config";
import path from "path";

const PATHS: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

export default (env: BuildEnv) => {
  const PORT = env.port || 3000;
  const MODE: BuildType = env.mode || "development";
  const isDevMod = MODE === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths: PATHS,
    port: PORT,
    isDevMod,
  });
  return config;
};
