import errorHandler from "../middlewares/error.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userModel.js";

export const register = catchAsyncError(async (req, res, next) => {
  try {
    const { name, email, phone, password, verificationMethod } = req.body;
    if (!name || !email || !phone || !password || !verificationMethod) {
      return next(new errorHandler("All fields are required", 400));
    }
    function validatePhoneNumber(phone) {
      const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
      return phoneRegex.test(phone);
    }
    if (!validatePhoneNumber(phone)) {
      return next(
        new errorHandler("Invalid phone number according to india", 400)
      );
    }
    const existingUser = await User.findOne({
      $or: [
        {
          email,
          accountVerified: true,
        },
        {
          phone,
          accountVerified: true,
        },
      ],
    });

    if (existingUser) {
      return next(
        new errorHandler("Phone or Email is already registered", 400)
      );
    }
    const registrationAttemptsByUser = await User.find({
      $or: [
        { phone, accountVerified: false },
        { email, accountVerified: false },
      ],
    });

    if (registrationAttemptsByUser.length > 3) {
      return next(
        new errorHandler(
          "you have exceed the limit(3),Please try after an hour",
          400
        )
      );
    }
    const userData = {
      name,
      email,
      phone,
      password,
    };
    const user = await User.create(userData);
    const verificationCode = await user.generateVerificationCode();
    await user.save();

    sendVerificationCode(verificationMethod, verificationCode, email, phone);
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
});
