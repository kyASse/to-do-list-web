const todoList = document.querySelector('.todo-list');
    const newTodoInput = document.querySelector('#new-todo');
    const addTodoButton = document.querySelector('.add-todo');

    addTodoButton.addEventListener('click', (e) => {
      e.preventDefault();
      const newTodoText = newTodoInput.value.trim();
      if (newTodoText) {
        const newTodoItem = document.createElement('LI');
        newTodoItem.classList.add('todo-item');
        newTodoItem.innerHTML = `
          <input type="checkbox">
          <span>${newTodoText}</span>
        `;
        todoList.appendChild(newTodoItem);
        newTodoInput.value = '';
      }
    });