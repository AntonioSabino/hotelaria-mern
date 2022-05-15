import jwt from "jsonwebtoken";
import { createError } from "./error";

export const verifyToken = (req, _res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Autenticação inválida."));
  }

  jwt.verify(token, process.envJWT, (error, user) => {
    if (error) return next(createError(403, "Token inválido."));

    req.user = user;
    next();
  });
};
