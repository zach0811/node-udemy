require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("658cc6c02da506ab4e948735")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("658d8b993c79982739455422")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
