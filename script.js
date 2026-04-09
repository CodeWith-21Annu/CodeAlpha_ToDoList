function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
        //Create list item
        let li = document.createElement("li");

        //Task text
        let span = document.createElement("span");
        span.innerText = taskText;

         //mark complete on click
        span.onclick = function() {
            span.classList.toggle("completed");
        };

        //create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.onclick = function() {
            li.remove();
        };
        //Add text + button inside li
        li.appendChild(span);
        li.appendChild(deleteBtn);

        document.getElementById("tasklist").appendChild(li);
        
        input.value = "";
}