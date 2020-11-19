import ToDoListItem from './toDoListItemClass.js';
import ToDoList from './toDoListClass.js';

const toDoList = new ToDoList();

document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    console.log('ready');
    refreshPage();
}

const refreshPage = () => {
    clearDisplayList();
   // renderList();
    // clearItemEntryField()
    //setFocusOnItemEntry()
}

const clearDisplayList = () => {
    const parentElement = document.getElementById('listItems');
    console.log(parentElement);
    deleteContents(parentElement);
}

const deleteContents = (parentElement) => {
    let child = parentElement.lastElementChild;
    while (child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

// const renderList = () => {
//     const list = ToDoList.getList();
//     list.forEach(item => {
//         buildListItem(item);
//     });
// };

// const buildListItem = (item) => {
//     const div = document.createElement('div');
//     div.className = "item";
//     const check = document.createElement("input");
//     check.type = 'checkbox';
//     check.id = item.getId();
//     check.tabindex = 0;

//     const label = document.createElement('label');
//     label.htmlFor = item.getId();
//     label.textContent = item.getItem();
//     div.appendChild(check);
//     div.appendChild(label);
//     const container = document.querySelector('#listitems');
//     container.appendChild(div);
// }

// const addClickListenerToCheckbox = (checkbox) => {
//     checkbox.addEventListener('click', (event) => {
//         ToDoList.removeItemFromList(checkbox.id);
//         //TODO: remove from persistent data
//         setTimeout(()=> {
//             refreshPage();
//         }, 1000);
//     })
// }