import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import { When } from '../if';
import Modal from '../modal';

import './todo.scss';

function ToDo (props) {
  
  const [todoList, setTodoList] = useState([]);
  const [item, setItem] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({}); 

  handleInputChange = e => {
    setState({ item: {...item, [e.target.name]: e.target.value} });    
  };

  handleSubmit = (e) => {
    props.handleSubmit(item);   
  };

  addItem = (e) => {

    e.preventDefault();
    e.target.reset();

    const defaults = { _id: uuid(), complete:false };
    const item = Object.assign({}, item, defaults);
    setState({
      todoList: [...todoList, item],
      item: {},
    });

  };

  deleteItem = id => {

    setState({
      todoList: todoList.filter(item => item._id !== id),
    });

  };

  saveItem = updatedItem => {

    setState({
      todoList: todoList.map(item =>
        item._id === updatedItem._id ? updatedItem : item
      ),
    });

  };
  const updateitem = (newItem) =>
  this.setState({
    item: Object.values[item].map(item =>
      item._id === newItem._id ? newItem : item
    ),
  });

  toggleComplete = id => {
    let item = todoList.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      saveItem(item);
    }
  };

  toggleDetails = id => {
    let showDetails = ! showDetails;
    let details = todoList.filter( item => item._id === id )[0] || {};
    setState({details, showDetails});
  }

  render() {
    return (
      <>
        <header>
          <h2>
            There are
            {todoList.filter( item => !item.complete ).length}
            Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <h3>Add Item</h3>
            <form onSubmit={addItem}>
              <label>
                <span>To Do Item</span>
                <input
                  name="text"
                  placeholder="Add To Do List Item"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <span>Difficulty Rating</span>
                <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={handleInputChange} />
              </label>
              <label>
                <span>Assigned To</span>
                <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
              </label>
              <label>
                <span>Due</span>
                <input type="date" name="due" onChange={handleInputChange} />
              </label>
              <button>Add Item</button>
            </form>
          </div>

          <div>
            <ul>
              { todoList.map(item => (
                <li
                  className={`complete-${item.complete.toString()}`}
                  key={item._id}
                >
                  <span onClick={() => toggleComplete(item._id)}>
                    {item.text}
                  </span>
                  <button onClick={() => toggleDetails(item._id)}>
                    Details
                  </button>
                  <button onClick={() => deleteItem(item._id)}>
                    Delete
                  </button>
                  <button onClick={() => updatedItem(item._id)}>
                    Update
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <When condition={showDetails}>
          <Modal title="To Do Item" close={toggleDetails}>
            <div className="todo-details">
              <header>
                <span>Assigned To: {details.assignee}</span>
                <span>Due: {details.due}</span>
                <span>Difficulty Rating: {details.difficulty}</span>
              </header>

              <div className="item">
                {details.text}
              </div>
            </div>
          </Modal>
        </When>
      </>
    );
  }
}

export default ToDo;
