document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-button');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          addTask();
      }
  });

  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');

      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      taskSpan.addEventListener('click', () => {
          taskItem.classList.toggle('completed');
      });

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-task-button');
      removeButton.addEventListener('click', () => {
          taskList.removeChild(taskItem);
      });

      taskItem.appendChild(taskSpan);
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);

      taskInput.value = '';
      taskInput.focus();
  }
});
