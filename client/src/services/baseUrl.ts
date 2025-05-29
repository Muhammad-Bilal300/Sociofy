// const baseUrl: string = "http://localhost:8080/api/v1";
// export const imageBaseUrl: string = "http://localhost:8080";
// export default baseUrl;

const node_env = "production";

const isProduction = node_env === "production";

const baseUrl: string = isProduction
  ? "https://sociofy-backend-f83x.onrender.com/api/v1" // relative path in production
  : "http://localhost:8080/api/v1";

export const imageBaseUrl: string = isProduction
  ? "https://sociofy-backend-f83x.onrender.com"
  : "http://localhost:8080";

export default baseUrl;
