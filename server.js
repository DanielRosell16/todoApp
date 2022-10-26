
const express = require('express')
const app = express()
const port = 8000

app.use(express.static('client'))

app.get('./client/index.js', (req, res) => {
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