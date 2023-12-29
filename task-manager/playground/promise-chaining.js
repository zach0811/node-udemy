require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("658ccc7a77049b54fb9f5f53", { age: 5 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 5 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("658ccc7a77049b54fb9f5f53", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
