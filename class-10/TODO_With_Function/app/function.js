/**
 * Get data
 */
const getData = (key) => {
  let todos = [];
  if (localStorage.getItem(key)) {
    todos = JSON.parse(localStorage.getItem(key));
    return todos;
  } else {
    return todos;
  }
};

/**
 * Set data to LS
 */

const insertData = (key, data) => {
  //check data exits or not
  let todos = [];
  if (localStorage.getItem(key)) {
    todos = JSON.parse(localStorage.getItem(key));
  }

  //data push

  todos.push(data);

  //insert new data
  localStorage.setItem(key, JSON.stringify(todos));
};

/**
 * update Data
 */
const updateData = (key, data) => {
  //insert new data
  localStorage.setItem(key, JSON.stringify(data));
};
