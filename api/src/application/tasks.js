module.exports = (dependencies) => ({
  getTasks: () => {
    const apiStatusCodes = dependencies.helpers.getApiStatusCodes()
    const statusCode = apiStatusCodes.OK
    const heroes = dependencies.infrastructure.tasksRepository.getTasks()

    return dependencies.helpers.makeReturn(statusCode.status, {
      message: statusCode.message,
      data: heroes,
    })
  },
  createTask: (task) => {
    const apiStatusCodes = dependencies.helpers.getApiStatusCodes()
    let statusCode = apiStatusCodes.UNPROCESSABLE_ENTITY

    const validTask = dependencies.domain.validTask(task)
    if (validTask === true) {
      dependencies.infrastructure.tasksRepository.addTask(task)
      statusCode = apiStatusCodes.CREATED
    }

    return dependencies.helpers.makeReturn(statusCode.status, {
      message: statusCode.message,
      data: task,
    })
  },
  updateTask: (task) => {
    const apiStatusCodes = dependencies.helpers.getApiStatusCodes()
    const statusCode = apiStatusCodes.OK

    dependencies.infrastructure.tasksRepository.updateTask(task)

    return dependencies.helpers.makeReturn(statusCode.status, {
      message: statusCode.message,
      data: task,
    })
  },
})
