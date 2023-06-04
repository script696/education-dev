export type BuildType = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildType;
  paths: BuildPaths;
}
