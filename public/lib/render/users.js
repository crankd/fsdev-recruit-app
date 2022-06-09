/*  
  A library of user data rendering functions
*/

// add a list to the page
const list = (targetId, data) => {
  const parent = document.getElementById('page-content');
  parent.innerHTML = '';
  const card = document.createElement('div');
  const elem = document.createElement('ul');
  card.classList.add('card');
  elem.classList.add('list-group','list-group-flush');
  elem.setAttribute('id', targetId);
  data.forEach(item => listItem(elem, item))
  parent.appendChild(card);
  card.appendChild(elem);
}

// add a list item to the list
const listItem = (list, item) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.textContent = item.name;
  list.appendChild(li);
}

export {
  list
}