const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname is required"],
    },

    email: {
      type: String,
      required: [true, "Password is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.statics.adminExists = async function () {
  const adminCount = await this.countDocuments({ role: "admin" });
  return adminCount >= 1;
};

module.exports = mongoose.model("User", userSchema);
