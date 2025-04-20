export const UserAuthTokenOptions = {
  httpOnly: true,
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
};

export const JWT_EXPIRY = "24h";
