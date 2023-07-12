//create element 

window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const inputDOM= document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskk = inputDOM.value;

        if(!taskk){
            alert("Please fill out the task ");
            return ; 
        }
        
        //task divi oluştur 
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        //content divi
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content")
        
        task_el.appendChild(task_content_el)
        //inputDOM oluştur
        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value= taskk;

        localStorage.setItem("task", task_input_el.value);


        task_input_el.setAttribute("readonly","readonly");
        
        task_content_el.appendChild(task_input_el);

       
        //button kısmı
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el= document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";//inner htmli

        const task_delete_el = document.createElement("i");
        task_delete_el.classList.add("fa", "fa-trash", "delete")
        

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el)

        list_el.appendChild(task_el);

        inputDOM.value='';

        //butonları çalıştırma 
        task_edit_el.addEventListener('click' , () => {
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                 task_edit_el.innerHTML = "Save";
                 task_input_el.removeAttribute("readonly");
                 task_input_el.focus();
            }else{   
                task_edit_el.innerText  = "Edit"
                localStorage.setItem("task", task_input_el.value);

                task_input_el.setAttribute("readonly","readonly");
            }
        })

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
            localStorage.removeItem("task");
        })

    });

});