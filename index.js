const todoList = ['make dinner', 'wash dishes'];

// step 4: create a variable to store the result
let todoListHTML = ''; 

//step 1: create a for loop to loop through the array
for (let i = 0; i < todoList.length; i++) {
        // step 2: get the string for each index
        const todo = todoList[i];

        //step 3: for each todo we'll create an html code
        const html = `<p>${todo}</p>`;

        //step 5: add the todo to the variable in step 4.
        todoListHTML += html;
}
console.log(todoListHTML);

function addTodo() {
      const inputElement = document.querySelector('.todo-input');
      const name = inputElement.value;

      todoList.push(name);
      console.log(todoList);

      inputElement.value = '';
}