import path from "path";

import "dotenv/config";

export const BASE_DIR = path.dirname(__dirname);

export const MONGODB_URI = String(process.env.MONGODB_URI);

export const SALT = 12;

export const JWT_EXPIRY = "24h";

export const JWT_SECRET = String(process.env.JWT_SECRET);
