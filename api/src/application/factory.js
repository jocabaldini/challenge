const infrastructure = require("../infrastructure")
const helpers = require("../../helpers")

const dependencies = {
  infrastructure: infrastructure(),
  helpers,
}
dependencies.domain = require("../domain")(dependencies)

const tasks = require("./tasks")

module.exports = () => ({
  dependencies: dependencies,
  createTask: tasks(dependencies).createTask,
  getTasks: tasks(dependencies).getTasks,
  updateTask: tasks(dependencies).updateTask,
})
