export const userAuthTokenOptions = () => {
  return {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
  };
};
