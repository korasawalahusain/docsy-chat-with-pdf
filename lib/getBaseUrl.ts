const getBaseUrl = () =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.LIVE_URL}`;

export default getBaseUrl;
