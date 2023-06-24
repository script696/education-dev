import webpack, { RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { PATHS } from "../../webpack.config";
import path from "path";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  return {
    ...config,
    module: {
      ...config.module,
      rules: [...rules, buildCssLoader(true), buildSvgLoader()],
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
