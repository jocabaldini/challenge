module.exports = (dependencies) => ({
  validTask: (task) => {
    if (!task.description || task.description.length === 0) {
      return false
    }
    if (!task.owner || task.owner.length === 0) {
      return false
    }
    if (!task.mail || task.mail.length === 0) {
      return false
    }
    return true
  },
})
