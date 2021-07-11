module.exports = () => {
  const TASK_PENDENT = 0
  const TASK_DONE = 1
  const tasks = [
    {
      id: 1,
      description: "Tarefa 1",
      owner: "Responsável tarefa 1",
      mail: "task1@owner.com",
      done: TASK_DONE,
      undoCount: 0,
    },
    {
      id: 2,
      description: "Tarefa 2",
      owner: "Responsável tarefa 2",
      mail: "task2@owner.com",
      done: TASK_PENDENT,
      undoCount: 1,
    },
    {
      id: 3,
      description: "Tarefa 3",
      owner: "Responsável tarefa 3",
      mail: "task3@owner.com",
      done: TASK_DONE,
      undoCount: 2,
    },
    {
      id: 4,
      description: "Tarefa 4",
      owner: "Responsável tarefa 4",
      mail: "task4@owner.com",
      done: TASK_DONE,
      undoCount: 0,
    },
    {
      id: 5,
      description: "Tarefa 5",
      owner: "Responsável tarefa 5",
      mail: "task5@owner.com",
      done: TASK_PENDENT,
      undoCount: 0,
    },
    {
      id: 6,
      description: "Tarefa 6",
      owner: "Responsável tarefa 6",
      mail: "task6@owner.com",
      done: TASK_DONE,
      undoCount: 0,
    },
    {
      id: 7,
      description: "Tarefa 7",
      owner: "Responsável tarefa 7",
      mail: "task7@owner.com",
      done: TASK_PENDENT,
      undoCount: 1,
    },
    {
      id: 8,
      description: "Tarefa 8",
      owner: "Responsável tarefa 8",
      mail: "task8@owner.com",
      done: TASK_DONE,
      undoCount: 1,
    },
    {
      id: 9,
      description: "Tarefa 9",
      owner: "Responsável tarefa 9",
      mail: "task9@owner.com",
      done: TASK_PENDENT,
      undoCount: 0,
    },
    {
      id: 10,
      description: "Tarefa 10",
      owner: "Responsável tarefa 10",
      mail: "task10@owner.com",
      done: TASK_PENDENT,
      undoCount: 0,
    },
    {
      id: 11,
      description: "Tarefa 11",
      owner: "Responsável tarefa 11",
      mail: "task11@owner.com",
      done: TASK_PENDENT,
      undoCount: 0,
    },
    {
      id: 12,
      description: "Tarefa 12",
      owner: "Responsável tarefa 12",
      mail: "task12@owner.com",
      done: TASK_PENDENT,
      undoCount: 0,
    },
  ]

  return {
    getTasks: () => tasks,
    addTask: (task) => tasks.push(task),
  }
}
