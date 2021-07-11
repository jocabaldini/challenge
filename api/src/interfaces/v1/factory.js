const tasksRoutes = require("./tasks-routes")
const apiPrefix = "/api/v1"

module.exports = (server, application) => {
  tasksRoutes(server, application, apiPrefix)
}
