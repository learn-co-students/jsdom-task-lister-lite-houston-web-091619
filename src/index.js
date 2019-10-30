document.addEventListener("DOMContentLoaded", function (){
  // your code here
    const form = document.querySelector('#create-task-form')
    form.addEventListener("submit", function() {
      event.preventDefault()
      // debugger
      console.log(event.target[0].value)
      // const div = document.querySelector('#description-container') 
      const div = document.querySelector('#list')

      const p = document.createElement('p')
      p.innerText = event.target[0].value
      div.append(p)
      
        event.target.reset()
        
      })
})
