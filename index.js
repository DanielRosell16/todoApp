
// const express = require('express')
// const app = express()
// const port = 8000

// app.use(express.static('client'))

// app.get('/todoModel', (req, res) => {
//   res.send(todoModel)
//   console.log(req)
// })

// app.post('/todoModel', (req, res) => {
//     console.log(req)
//     todoModel.push({
//         todoName: req.query.todoName,
//         todoStatus: false,
//         todoId: todoModel.todoId + 1,
//         todoCategory: "School",
//         todoDate: "09/09/22",
//         todoDailyReminder: false,
//     })
//     res.send(todoModel)
//   })

//   app.put('/todoModel', (req, res) => {
//     res.send(todoModel)
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

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
        todoCategory: "Future Use",
        todoDate: "09/18/22",
        todoDailyReminder: false,
    }
]

//global values
let addBtn = document.querySelector('#addBtn')
let newTodoInput = document.querySelector('#newInput')
let ulItem = document.querySelector('.todoList')
let newLi = document.createElement("li")

//add event listner to the UL to listen to when the LIs are clicked
ulItem.addEventListener('click', (event) => {


    //check to see what element the user is clicking on
    if(event.target.tagName === 'LI'){
        //if user is clicking on the LI complete the todo
        console.log(event.target.dataset.todoid)
        let todoIds = event.target.dataset.todoid
        completeTodo(todoIds)


        //edit the todo in the data model
        // todoModel[<index from above.].todostatus = true

        displayTodos(todoModel)
    } else if(event.target.tagName === 'I') {
        //call delete function
        console.log(event.target.dataset.todoid)
        let todoIdDeletion = event.target.dataset.todoid
        // deleteTodoItem(todoIdDeletion)
    }
    
})

function completeTodo(id) {
    let todoIdx = todoModel.findIndex(todo => todo.todoId == id)
    todoModel[todoIdx].todoStatus = ! todoModel[todoIdx].todoStatus
}



function addTodo(todoName) {
    let newTodo = {
        todoName: todoName,
        todoStatus: false,
        todoId: todoModel.length,
        todoDailyReminder: false,
    }
    todoModel.push(newTodo)
    ulItem.append(newLi)
    displayTodos(todoModel)

}


addBtn.addEventListener('click', event => {
    let todoName = newTodoInput.value
    if(todoName === "")
    return alert("You need to add a task")
    addTodo(todoName)
    displayTodos(todoModel)
    newTodoInput.value = ""
})



// click on edit button
function editBtn() {
    let editTodoList = document.querySelector(".editBtn")

    editTodoList.addEventListener("dblclick", editItem)
    editTodoList.textContent = input.value

    let item = event.target.innerHTML;

    let itemInput = document.createElement("input")
    itemInput.type = "text"
    itemInput = item;
    
}

function deleteTodoItem(id) {

    const todoIdX = todoModel.findIndex(todo => todo.todoId === id)
    todoModel.splice(todoIdX, 1)
    displayTodos(todoModel)

}
   




function clearCompletedTodos() {
    let clearBtn = document.querySelector(".clearBtn")
    clearBtn.addEventListener("click", event => {
        console.log("Clear btn clicked")
        if(todoModel.todoStatus === true) {
            todoModel.todoStatus === 'none'
        }
        else {
            todoModel.todoStatus === 'block'
        }
        
    })

}

clearCompletedTodos()


// figure out how to get current todos to show up underneath

//create a function that will add todos to the UL element in the HTML
function displayTodos(todoModel) {

    //clear out the html that is already there so we can replace it
    ulItem.innerHTML = ""


    todoModel.forEach(todo => {

        //for the css, check to see if the todo is done. If it is, place the string 'done' into the done var,
        // if it isn't, empty string
        let done = todo.todoStatus ? "done" : "";

        // look up expression VS statements

        // statemetns do something
        // experssion evuate to a value

        //add a data attribute to each li, containing the id of the todo.
        // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
        let liMarkup = `<li class='${done}' 
             data-todoId ='${todo.todoId}'>
            ${todo.todoName}
            <span class="deleteBtn"> <i class="fa fa-trash"></i></span>
            <span class="editBtn"><i class="fa fa-edit"></i></span>
        </li>`
        // ${todo.todoDate}


        // look up insertAdjacentHTML
        //Place the markup in the HTML
        ulItem.insertAdjacentHTML('beforeend', liMarkup)
        newLi.insertAdjacentHTML('beforeend', liMarkup)


        let deleteBtn = document.querySelector(`li[data-todoId='${todo.todoId}'] .deleteBtn`)

        deleteBtn.addEventListener("click", event => {
            console.log(deleteBtn)
            if(event.target.todoStatus === false) {
               return alert("Are you sure that you want to delete this uncompleted task?")
            }
            else {
                
            }
            deleteTodoItem(todo.todoId)

        })

    })

    let pendingTask = document.querySelector("#pendingTask")
    pendingTask.innerHTML = todoModel.filter(todo => todo.todoStatus === false).length
}

displayTodos(todoModel)