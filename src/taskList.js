class TaskList {

    constructor(){
      this.element = document.createElement('ul')
    }
  
    createItem(description){
      let item = new TaskListItem(description)
      this.element.append(item.element)
    }
  
  
  }