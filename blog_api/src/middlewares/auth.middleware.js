import { STATUS_CODES } from "http";
import jwt from "jsonwebtoken";
import { User } from "@/models";
import { JWT_SECRET } from "@/settings";

const KEYWORD = "Token";

/**
 * Authentication middleware.
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 * @returns {Promise<Response | void>}
 */
export default async function authenticate(request, response, next) {
  const authorization = request.headers?.authorization;
  if (!authorization) {
    return response.status(401).json({ detail: STATUS_CODES[401] });
  }
  const values = authorization.split(" ");
  if (values.length != 2) {
    return response.status(401).json({ detail: STATUS_CODES[401] });
  }
  if (KEYWORD.toLowerCase() !== values[0].toLowerCase()) {
    return response.status(401).json({ detail: STATUS_CODES[401] });
  }
  const token = values[1];
  if (!token) {
    return response.status(401).json({ detail: STATUS_CODES[401] });
  }
  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await User.findById({ id: decoded.id });
  if (!user) {
    return response.status(401).json({ detail: STATUS_CODES[401] });
  }
  request.user = user;
  return next();
}
