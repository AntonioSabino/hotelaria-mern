import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, _res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "Autenticação inválida."));
  }

  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(createError(403, "Token inválido."));

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Você não está autorizado."));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Você não está autorizado."));
    }
  });
};
