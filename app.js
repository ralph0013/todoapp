let form = document.querySelector("form")
let todoInput = document.querySelector("#todoinput")
let todoList =  document.querySelector(".list-group")
let searchTodo = document.querySelector("#searchtodo")
let clearBtn = document.querySelector("#clearbtn")

let welcome = document.getElementById('welcome')



loadEventListeners()

function loadEventListeners() {
    form.addEventListener('submit' , addTodo)
    todoList.addEventListener('click',removetodo)
    clearBtn.addEventListener('click', clearTodo)

}

function addTodo(e) {

    if (todoInput.value === '') {
        alert('enter todo')
    } else {
        let li = document.createElement('li')
        li.className = 'list-group-item'

        let liText = document.createTextNode(todoInput.value)

        li.appendChild(liText)
        todoList.appendChild(li)

        // createa link element and add properties

        let link = document.createElement('a')
        link.className = 'delete-item'
        link.style.cursor = 'pointer'

        link.style.marginLeft = '60%'

        link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        li.appendChild(link)

    }
 
    todoInput.value = ""
    e.preventDefault()
}

function removetodo(e) {

    if (e.target.prentElement.classList.comtains('delete-item')) {
        if (confirm("are you sure you want to delete")) {

            e.target.parentElement.parentElement.remove()
        }
    }
    e.preventDefault( )
}

// clear todo
function clearTodo() {

    // todoList.innerHTML = ''

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }
}

function filterTodo(e) {
    let search = e.target.value.toLowerCase()
    let listTodos = document.querySelectorAll(".list-group-item")
    listTodos.forEach((todo) => {
        const todoContent = todo.firstChild.textContent
        if (todoContent.toLowerCase().indexOf(search) != -1)
        {
            todo.style.display = 'block'

        } else {
            todo.style.display = 'none'
        }
    })
}