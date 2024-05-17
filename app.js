const generateStartTask = () => {
  if (localStorage.length === 0) {
    const ulList = document.getElementById('ulList');
    for (let i = 0; i < 5; i += 1) {
      const task = document.createElement('li');
      task.classList.add('list-tasks');
      let span = document.createElement('span');
      let text = document.createTextNode('\u00D7');
      span.className = 'close';
      span.addEventListener('click', removeTask);
      span.appendChild(text);
      task.textContent = `Task number ${i + 1}`;
      if (i % 2 !== 0) {
        task.classList.add('oneTask');
      }
      task.append(span);
      ulList.append(task);
    }
  } else {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const ulList = document.getElementById('ulList');
    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.textContent = task.text;
      li.className = task.classes;
      let span = document.createElement('span');
      let text = document.createTextNode('\u00D7');
      span.className = 'close';
      span.addEventListener('click', removeTask);
      span.appendChild(text);
      li.append(span);
      ulList.appendChild(li);
    });
  }
};
generateStartTask();

const performTask = document.querySelector('ul');
performTask.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('oneTask');
    funcForAddToLocalStorage();
  }
});

const btn = document.querySelector('.btn');
btn.addEventListener('click', createNewTask);

function createNewTask() {
  let currentUl = document.getElementById('ulList');
  let newData = document.getElementById('currInput').value;

  if (newData.length <= 4) {
    alert('Minimum 5 letters!');
    document.getElementById('currInput').value = '';
    return;
  }
  let newPost = document.createElement('li');
  newPost.classList.add('list-tasks');
  newPost.innerText = newData;
  let span = document.createElement('span');
  let text = document.createTextNode('\u00D7');
  span.className = 'close';
  span.addEventListener('click', removeTask);
  span.appendChild(text);
  newPost.appendChild(span);
  currentUl.insertAdjacentElement('beforeend', newPost);
  document.getElementById('currInput').value = '';

  funcForAddToLocalStorage();
}

document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter' && event.target.nodeName == 'INPUT') {
    createNewTask();
  }
});

function funcForAddToLocalStorage() {
  const tasks = [];
  const listItems = document.querySelectorAll('#ulList li');
  listItems.forEach((item) => {
    tasks.push({
      text: item.childNodes[0].nodeValue.trim(),
      classes: item.className,
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(event) {
  const item = event.target.parentNode;
  item.remove();
  funcForAddToLocalStorage();
}
