export type BuildType = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildType;
  paths: BuildPaths;
  port: number;
  isDevMod: boolean;
}

export interface BuildEnv {
  mode: BuildType;
  port: number;
}
