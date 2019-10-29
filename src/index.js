document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('create-task-form')


      form.addEventListener("submit", function() {
      event.preventDefault()

          function creatList() {
              const create_li = document.createElement('li')
              const create_Btn = document.createElement('button')
              create_Btn.innerText = "X"
              const get_ul = document.getElementById('tasks')
              create_li.innerText = event.target[0].value
              create_li.append(create_Btn)
              get_ul.append(create_li)
                  create_Btn.addEventListener("click", function(){
                      create_li.remove()
                      create_Btn.remove()
                  });
          };
        creatList() 
    });


    const deleteBtn = document.getElementById('clear-btn')
        deleteBtn.addEventListener("click", function(){
        alert("hello")
    });

     
});

