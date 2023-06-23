import webpack from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { PATHS } from "../../webpack.config";
import path from "path";

export default ({ config }: { config: webpack.Configuration }) => {
  // config.resolve.modules.push(PATHS.src);
  // config.resolve.extensions.push(".ts", ".tsx");
  // config.resolve.alias = {
  //   "@app": PATHS.app,
  //   "@widgets": PATHS.widgets,
  //   "@entities": PATHS.entities,
  //   "@pages": PATHS.pages,
  //   "@shared": PATHS.shared,
  // };
  //
  // config.module.rules.push(buildCssLoader(true));
  //
  // return config;

  return {
    ...config,
    module: {
      ...config.module,
      rules: [...config.module.rules, buildCssLoader(true)],
    },
    resolve: {
      ...config.resolve,
      modules: [...config.resolve.modules, PATHS.src],
      extensions: [...config.resolve.extensions, ".ts", ".tsx"],
      alias: {
        "@app": path.resolve(__dirname, "..", "..", "src", "app"),
        "@widgets": path.resolve(__dirname, "../../src/widgets"),
        "@entities": path.resolve(__dirname, "../../src/entities"),
        "@pages": path.resolve(__dirname, "../../src/pages"),
        "@shared": path.resolve(__dirname, "../../src/shared"),
      },
    },
  };
};
