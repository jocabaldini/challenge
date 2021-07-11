const tasks = require("./tasks")

module.exports = (dependencies) => ({
  validTask: tasks(dependencies).validTask,
})
