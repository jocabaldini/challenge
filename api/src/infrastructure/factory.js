const tasksRepository = require("./task-repository")()

module.exports = () => ({
  tasksRepository: {
    getTasks: tasksRepository.getTasks,
    addTask: tasksRepository.addTask,
  },
})
