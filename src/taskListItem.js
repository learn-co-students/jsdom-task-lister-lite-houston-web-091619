class TaskListItem {

    constructor(description){
      this.element = document.createElement('li')
      this.element.innerText = description
  
      const removeButton = document.createElement('button')
      removeButton.innerText = 'Remove'
      this.element.append(removeButton)
  
      removeButton.addEventListener('click', () =>{
        this.element.remove()
      })
    }
  
  }