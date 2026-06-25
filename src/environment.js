let IS_PROD = true;

const server = IS_PROD
  ? "http://ec2-54-206-26-163.ap-southeast-2.compute.amazonaws.com:5000"
  : "http://localhost:5000";

export default server;