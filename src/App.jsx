import "./App.css";
import Todoitem from "./component/Todoitem";
import Additem from "./component/Additem";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Mahmoud", age: 24 },
    { id: 2, name: "Ahmed", age: 26 },
    { id: 3, name: "Ali", age: 20 },
  ]);

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    toast.success("Item deleted successfully!");
  };

  const addItem = (item) => {
    const newItem = { ...item, id: Math.random(), age: parseInt(item.age, 10) };
    setItems([...items, newItem]);
    toast.success("Item added successfully!");
  };
  return (
    <>
      <div className="container px-3 mx-auto w-full md:w-4/6 my-16">
      <ToastContainer />
        <h1 className="text-center text-2xl md:text-4xl font-semibold mb-4" style={{ textShadow: "0px 0px 7px black" }}>To-Do List</h1>
        <Todoitem items={items} onDeleteItem={deleteItem}  />
        <Additem addItem={addItem}  />
      </div>
    </>
  );
}

export default App;
