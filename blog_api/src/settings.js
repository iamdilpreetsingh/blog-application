import path from "path";

import "dotenv/config";

export const BASE_DIR = path.dirname(__dirname);

export const MONGODB_URI = String(process.env.MONGODB_URI);
