document.addEventListener("DOMContentLoaded", () => {

  const formTask = document.querySelector('#create-task-form')
  const addTask = document.querySelector('#main-content')

  addDropDown(formTask)

  addTask.addEventListener("submit", () => {
    event.preventDefault() //prevents this event from going off, unless it's actaully being used
    const ul = document.querySelector('#tasks') // This picks out the tag with the id name 'task'
    ////Or we could do this next line to grab that specific tag
    // const ul = document.getElementById("tasks")

    //creating tags to to be used during this event
    const li = document.createElement('li')
    const rm = document.createElement('button')
    li.id = 'myTask'
    li.innerText = event.target[0].value //takes the value from the text box andf makes it the text for the li tag
    li.style.color = event.target[2].value //grabs the current selected value in the dropdown box
    rm.innerText = 'x'

    rmTask(li,rm)

    li.append(rm) //adds the btn to in the li tag
    ul.append(li) //adds the newly made li tag to the ul tag
    
    allTask = document.querySelectorAll('#myTask')
    newArrTasks = [] // this will store the elements from allTask in an array. Reason I'm doing this is to go around the arrraylike varible allTask and turn it into an array
                     // this may seem a bit weird but it's to bypass the issue I have using sort method
    for(let i= 0; i < allTask.length; i++){
      newArrTasks.push(allTask[i])
    }

    sortedAllTask = newArrTasks.sort(function(a, b) { return setValue(b) - setValue(a) } )

    rmAllTask(ul)
    addSortedTasks(sortedAllTask, ul)

    event.target.reset() // resets all the events
  })
});

const addSortedTasks = (taskArr, ul) => {
  for (let i = 0; i < taskArr.length; i++){
    createSortedTask(taskArr[i], ul)
  }
}

const createSortedTask = (task, ul) => {
  const li = document.createElement('li')
  const rm = document.createElement('button')
  li.id = 'myTask'
  li.innerText = task.innerText 
  li.style.color = task.style.color 
  rm.innerText = 'x'

  rmTask(li,rm)

  li.append(rm)
  ul.append(li)
}

const rmAllTask = (ul) => {
  while(ul.firstChild){
    ul.removeChild(ul.lastChild)
  }
}

const setValue = (task) => {
  console.log(task)
  if(task.style.color === 'red'){
    return 3
  }else if(task.style.color === 'orange'){
    return 2
  }else if(task.style.color === 'green'){
    return 1
  }
}

const addDropDown = (formTask) => {
  const dropD = document.createElement('select')
  const optionLow = document.createElement('option')
  const optionMid = document.createElement('option')
  const optionHigh = document.createElement('option')

  dropD.id = 'mySelect'

  optionLow.value = 'green'
  optionLow.innerText = 'Low Priority'

  optionMid.value = 'orange'
  optionMid.innerText = 'Mid Priority'

  optionHigh.value = 'red'
  optionHigh.innerText = 'High Priority'

  dropD.append(optionLow,optionMid,optionHigh)
  formTask.append(dropD)
}

const rmTask = (li,rm) => {
  rm.addEventListener("click", () => {
    event.preventDefault()
    li.remove()
  })
}