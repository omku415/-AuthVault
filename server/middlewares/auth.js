import { catchAsyncError } from "./catchAsyncError.js";
import errorHandler from "./error.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new errorHandler("User is not authenticated", 400));
  }
  const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
});
