let IS_PROD = true;

const server = IS_PROD
  ? "https://syncmeet-akif.duckdns.org"
  : "http://localhost:5000";

export default server;