
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

//add event listner to the UL to listen to when the LIs are clicked
ulItem.addEventListener('click', (event) => {
    console.log(event.target.dataset.todoid)
    let todoIds = event.target.dataset.todoid
    completeTodo(todoIds)


    //edit the todo in the data model
    // todoModel[<index from above.].todostatus = true

    displayTodos(todoModel)

})

function completeTodo(id) {
    let todoIdx = todoModel.findIndex(todo => todo.todoId == id)
    todoModel[todoIdx].todoStatus = !todoModel[todoIdx].todoStatus
}


function addTodo(todoName) {
    let newTodo = {
        todoName: todoName,
        todoStatus: false,
        todoId: todoModel.length,
        todoDailyReminder: false,
    }
    todoModel.push(newTodo)
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
let editBtn = document.querySelector(".editBtn")


// figure out how to get current todos to show up underneath

//create a function that will add todos to the UL element in the HTML
function displayTodos(todoModel) {

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
            <span> <i class="fa fa-trash"></i></span>
        </li>`

        // look up insertAdjacentHTML
        //Place the markup in the HTML
        ulItem.insertAdjacentHTML('beforeend', liMarkup)


    })
}

displayTodos(todoModel)