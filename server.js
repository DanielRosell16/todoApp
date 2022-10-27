
const express = require('express')
const app = express()
const port = 8000

app.use(express.static('client'))

app.get('/todos', (req, res) => {
  res.send(todoModel)
  console.log(req)
})

app.post('/todoModel', (req, res) => {
    console.log(req)
    todoModel.push({
        todoName: req.query.todoName,
        todoStatus: false,
        todoId: todoModel.todoId + 1,
        todoCategory: "School",
        todoDate: "09/09/22",
        todoDailyReminder: false,
    })
    res.send(todoModel)
  })

  app.put('/todoModel', (req, res) => {
    res.send(todoModel)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let todoModel = [
  {
      todoName: "Work in Todo App",
      todoStatus: false,
      todoId: 0,
      todoCategory: "School",
      todoDate: "09/09/22",
      todoDailyReminder: false,
  },
  {
      todoName: "Go to Work",
      todoStatus: true,
      todoId: 1,
      todoCategory: "Work",
      todoDate: "09/10/22",
      todoDailyReminder: true,
  },
  {
      todoName: "Look Up Cybersecurity",
      todoStatus: false,
      todoId: 2,
      todoCategory: "Future Profession",
      todoDate: "09/11/22",
      todoDailyReminder: true,
  },
  {
      todoName: "Look Up insertAdjacentHTML",
      todoStatus: true,
      todoId: 3,
      todoCategoryId: 0,
      todoDate: "09/18/22",
      todoDailyReminder: false,
  }
]