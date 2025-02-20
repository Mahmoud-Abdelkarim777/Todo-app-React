/* eslint-disable react/prop-types */
import { useState } from "react"
import { toast } from 'react-toastify';

export default function Additem(props) {
  const [inputValue, setInputValue] = useState({
    id: "", // Incrementing the id for each new item
    name: "",
    age: "",
  })
  const handelChange = (e) => {
    setInputValue({...inputValue, [e.target.id] : e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.name.trim() === "" || inputValue.age.trim() === "") {
      toast.warning("Please fill out all feild !");
      return;
    }
    // Add your code to add the new item to the list here
    props.addItem(inputValue)
    setInputValue({name: "", age: "" }) // Reset the input fields after adding an item

    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="inline-block px-3 text-center text-xl bg-gray-200 focus:outline-none border-[0.3px] border-[#ccc]  w-[40%] md:w-[60%]" type="text" placeholder="Enter name..." id="name" value={inputValue.name} onChange={handelChange} />
        <input className="inline-block px-3 text-center text-xl bg-gray-200 focus:outline-none border-[0.3px] border-[#ccc] w-[38%] md:w-[30%]" type="number" placeholder="Enter age..." id="age" value={inputValue.age} onChange={handelChange} />
        <input className="inline-block  text-center text-xl  border-[0.3px] border-[#ccc] transition duration-500 hover:bg-green-600 hover:text-white bg-[#39e939] w-[22%] md:w-[10%] cursor-pointer" type="submit" value="Add" />
      </form>
    </div>
  )
}
