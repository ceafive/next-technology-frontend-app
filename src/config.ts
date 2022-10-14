import dotenv from "dotenv";
dotenv.config();
import packageJson from "../package.json";

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,
  appleSearchBaseURI: "https://itunes.apple.com",

  nodeEnv: process.env["NODE_ENV"] ?? "development",
  port: process.env["PORT"] ?? 8000,
};

export default config;
