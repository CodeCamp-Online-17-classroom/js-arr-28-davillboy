// write code here
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}

const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

deleteTask(2);
console.log(tasks);

