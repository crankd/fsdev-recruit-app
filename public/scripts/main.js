import {
  list
} from '../lib/render/users.js';

// init() function should load once when page loads
const init = async (id) => {
  const data = company(); // get company data
  contentRender("navbar-logo", data.name);
  contentRender("navbar-text", data.about);
  contentRender("page-footer-copyright", '&copy; '+data.established+' '+data.name);
  contentRender("page-footer-content", data.about);
  controller(id); // call controller with default id
} 
// controller function should load on each menu item click event, or when called
const controller = async (id) => {
  const pagesAll = await pages();
  const page = pagesAll.find(p => p.id === id.toLowerCase());
  // console.log('controller() page:',page);
  if (page) {
    menu(id, pagesAll); // render menu
    contentRender("page-title", page.title);
    contentRender("page-subtitle", page.subtitle);
    contentRender("page-content", page.content);
  }
}
// render content on the screen
const contentRender = (elemId, value) => {
  const element = document.getElementById(elemId);
  // getContent() inner function
  const getContent = () => {
    return element.textContent;
  }
  // setContent() inner function
  const setContent = (value) => {
    element.innerHTML = value;
  }
  // console.log(element)
  if (value) {
    setContent(value);
  } else {
    return getContent();
  }
}
// build a menu
const menu = async (id, data) => {
  const menuParent = document.getElementById("page-menu");
  if (menuParent) {
    removeAllChildNodes(menuParent);
    // get menu data
    let menuItems = data.map(({id,caption}) => ({id, caption}))
    // build menu items
    menuItems.forEach(item => menuItem(menuParent, item, id));
    // add event listeners for each menu item click
    let menuElems = [...document.getElementsByClassName("nav-link")];
    menuElems.forEach(item => {
      item.addEventListener("click", (e) => {
        // console.log(e.target.href.split("#").pop());
        controller(e.target.href.split("#").pop());
      })
    })    
  } 
}
// render a menu item
const menuItem = (parent, item, selectedId) => {
  // console.log(parent, item, selectedId)
  const li = document.createElement("li");
  const a = document.createElement("a");
  li.classList.add("nav-item");
  a.classList.add("nav-link");
  if (item.caption === selectedId) {
    a.classList.add("active");
  }
  a.textContent = item.caption;
  a.href = `#${item.id}`;
  li.appendChild(a);
  parent.appendChild(li);
} 
// remove all children from aa element
const removeAllChildNodes = (element) => {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}
// data: pages
const pages = async (id) => {
  const data = [
    {
      id:"home", 
      caption:"Home", 
      title:"Home", 
      subtitle:"This is me saying `hello`",
      content: await home()
    },
    {
      id:"users", 
      caption: "Users", 
      title: "Users", 
      subtitle: "List of users",
      content: await users('https://jsonplaceholder.typicode.com/users')
    }
  ]
  // filter data by id
  if (id) {
    return data.find(p => p.id === id.toLowerCase());
  } else {
    return data;
  }
};
// data: home
const home = async () => {
    return "Welcome home!";
}
// data: users
const users = async (url) => {
  const method = "GET";
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    }
  });
  const data = await response.json();
  // console.log("users() data", data);
  return list('list-users', data);
};
// data: company
const company = () => {
  const obj = {};
  obj.name = "Company, inc";
  obj.established = 2021;
  obj.about = "A simple tagline for a simple app"
  return obj;
};
// default function
window.onload = init("home");