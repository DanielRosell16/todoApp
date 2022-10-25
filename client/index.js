
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

let catigories = [
    {
        catName: 'work',
        id: 0
    }
]

let editing = false;
let editId = 0;

//global values
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

let addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', event => {

    let todoName = newTodoInput.value
    if(todoName === "")
    return alert("You need to add a task")
    if(!editing){
        addTodo(todoName)
        displayTodos(todoModel)
    }

    if(editing) {
        console.log('editing')

        const todoIDX = todoModel.findIndex(todo => todo.todoId == editId)

        todoModel[todoIDX].todoName = todoName

        displayTodos(todoModel)
    }
    
    newTodoInput.value = ""
})





function deleteTodoItem(id) {

    const todoIdX = todoModel.findIndex(todo => todo.todoId === id)
    todoModel.splice(todoIdX, 1)
    displayTodos(todoModel)
}
   
function editBtn() {
    
   
            
 }

function clearCompletedTodos() {
    let clearBtn = document.querySelector(".clearBtn")
    clearBtn.addEventListener("click", event => {
        console.log("Clear btn clicked")

        const todoIdX = todoModel.findIndex(todo => todo.todoStatus === true)
        todoModel.splice(todoIdX, 1)

        deleteTodoItem(todoModel.todoStatus === true)

        if(todoModel.todoStatus === false) {
            alert("You have no completed tasks")
        }
    })
    displayTodos(todoModel)


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
        }) //end of deleteBtn

        // click on edit button
        let editTodoList = document.querySelector(`li[data-todoId='${todo.todoId}'] .editBtn`)

        editTodoList.addEventListener("click", event => {
            console.log("I clicked the edit button!")

            if(todoModel.todoStatus === true){
                alert("Are you sure you want to edit this completed item?")
            }


            //put the value in the box

            newTodoInput.value = todo.todoName;
            //set a var to know we are editing

            console.log(todo.todoId)
            editing = true;
            editId = todo.todoId;

            //if editing save to the correct object in the array (the todo we are editing)


            
            // fix the add new code - if edit is true, don't add new


            })
            


   
    })

    let pendingTask = document.querySelector("#pendingTask")
    pendingTask.innerHTML = todoModel.filter(todo => todo.todoStatus === false).length
}

displayTodos(todoModel)