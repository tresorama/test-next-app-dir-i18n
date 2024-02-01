import { type MiddlewareFunction } from "./middleware.chain";

export const handleLogging: MiddlewareFunction = async (request, next) => {
  console.log("");
  console.log("");
  console.log("");
  console.log("=============== REQUEST ========================");
  console.log({
    what: "middleware - handleLogging",
    req: `${request.method} ${request.url}`
  });

  return next();
};