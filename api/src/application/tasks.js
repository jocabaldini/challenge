module.exports = (dependencies) => ({
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
  getTasks: () => {
    const apiStatusCodes = dependencies.helpers.getApiStatusCodes()
    const statusCode = apiStatusCodes.OK
    const heroes = dependencies.infrastructure.tasksRepository.getTasks()

    return dependencies.helpers.makeReturn(statusCode.status, {
      message: statusCode.message,
      data: heroes,
    })
  },
})
