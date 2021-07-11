const express = require("express")
const watchEndPoints = require("../../../watchEndPoints")

module.exports = (server, application, apiPrefix) => {
  const prefix = apiPrefix + "/tasks"
  const tasksRouter = express.Router()
  const apiStatusCodes = application.dependencies.helpers.getApiStatusCodes()

  tasksRouter.get("/", (req, res) => {
    try {
      const ret = application.getTasks()
      return res.status(ret.statusCode).send(ret.data)
    } catch (error) {
      return res
        .status(apiStatusCodes.INTERNAL_SERVER_ERROR.status)
        .send(`Internal error: ${error}`)
    }
  })

  tasksRouter.post("", (req, res) => {
    try {
      const ret = application.createTask(req.body)
      return res.status(ret.statusCode).send(ret.data)
    } catch (error) {
      return res
        .status(apiStatusCodes.INTERNAL_SERVER_ERROR.status)
        .send(`Internal error: ${error}`)
    }
  })

  watchEndPoints.append(prefix, tasksRouter)
  server.use(prefix, tasksRouter)
}
