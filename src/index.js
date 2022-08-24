/*document.addEventListener("DOMContentLoaded", () => {
  // your code here
   const form=document.querySelector('form')
  form.addEventListener('submit',(e)=>{ e.preventDefault();  
    buildToDo(e.target.new-task-description.value )
          function buildToDo(newitem){
      let li =document.createElement('li')
      ul.append(li)
      let btn=document.createElement('button')
      btn.addEventListener('click',handleDelete)
      btn.innerText='x';
      li.appendChild(btn)
      document.querySelector('#tasks').appendChild(li)
    }
  
    function handleDelete(e){
      e.target.parentNode.remove()
    }
    
    
  })

  
});*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let li = document.createElement("li");
    const userInput = document.getElementById("new-task-description");
    li.innerText = userInput.value;
    let ul = document.getElementById("tasks");
    ul.append(li);
    const button = document.createElement("button");
    button.innerText = "X";
    const div = document.getElementById("list");
    li.appendChild(button);
    button.addEventListener("click", () => {
      li.remove();
    });
  });
});
