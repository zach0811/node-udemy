const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {});

const User = mongoose.model("User", {
  name: {
    type: String,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (validator.contains(value, "password")) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },

  age: {
    type: Number,
    default: 0,
    validate() {
      if (this.age < 0) {
        throw new Error("Age must be 0 or greater");
      }
    },
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
});

// const me = new User({
//   name: "   Zach   ",
//   password: "password123",
//   email: "MYMEMAIL@gmail.com",
// });
// me.save()
//   .then((me) => console.log(me))
//   .catch((error) => console.log(error));

module.exports = User;
