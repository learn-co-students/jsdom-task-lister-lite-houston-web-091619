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
    li.innerText = event.target[0].value //takes the value from the text box
    li.style.color = event.target[2].value //grabs the current selected value in the dropdown box
    rm.innerText = 'x' //labels the btn as x

    rmTask(li,rm)

    li.append(rm) //adds the btn to in th eli tag
    ul.append(li) //adds the newly made li tag to the ul tag

    sortTask(ul)
    
    event.target.reset() // lears the text box after sumbit
  })
});

const sortTask = (ul) => {
    // document.getElementById("mySelect").childNodes[2]
  const allTask = ul.childNodes
  const lowP = []
  const midP = []
  const highP = []
  let i;
  for (i = 1; i < allTask.length; i++) {
    if(allTask[i].style.cssText === "color: green;"){
      lowP.push(allTask[i])
    } else if(allTask[i].style.cssText === "color: orange;"){
      midP.push(allTask[i])
    }else{
      highP.push(allTask[i])
    }
  }
  // arr1.concat(arr2)
  console.log(highP)
  
  // ul.childNodes.remove()
  // ul.childNodes = allTask
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


// document.addEventListener("DOMContentLoaded", () => {
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const newTaskUl = document.getElementById("tasks");

//   //attach event listeners
//   newTaskForm.addEventListener("submit", createNewTask);
// });

// const createNewTask = event => {
//   event.preventDefault();
//   //stop form from trying to submit
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   appendNewTask(newTask);
//   event.target.reset();
// };

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
// };