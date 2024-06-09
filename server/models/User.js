const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      minLength: 8,
      required: true
    },
  },
  {
    id: false,
    timestamps: true
  }
)

//hashes password
userSchema.pre("save", async function (next) {
  // console.log("pre-save hashing")
  this.password = await bcrypt.hash(this.password, 10);
  next()
});

const User = model("user", userSchema);
module.exports = User;