import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/config";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
