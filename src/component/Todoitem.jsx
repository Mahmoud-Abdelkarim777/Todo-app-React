/* eslint-disable react/prop-types */

export default function Todoitem(props) {
  const {items , onDeleteItem} = props;
  let length = items.length;
  const listItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="inline-block px-3 text-center text-xl border-[0.3px] border-[#ccc] w-[40%] md:w-[60%]">{item.name}</span>
          <span className="inline-block px-3 text-center text-xl border-[0.3px] border-[#ccc] w-[38%] md:w-[30%]">{item.age}</span>
          <span className="inline-block px-3 text-center text-xl font-bold border-[0.3px]  border-[#ccc] w-[22%] md:w-[10%] cursor-pointer transition duration-500 hover:bg-[#f00] hover:text-white" onClick={()=>onDeleteItem(item.id)}>&times;</span>
        </div>
      );
    })
  ) : <p className="text-black text-lg md:text-xl text-center">There is no item to show</p>


  return (
    <>
      <div className="bg-white text-black text-lg md:text-xl ">
        <div>
          <span className="inline-block px-3 text-center text-xl font-bold border-[0.3px] border-[#ccc] bg-[#2ebaee] w-[40%] md:w-[60%] ">Name</span>
          <span className="inline-block px-3 text-center text-xl font-bold border-[0.3px] border-[#ccc] bg-[#2ebaee] w-[38%] md:w-[30%]">Age</span>
          <span className="inline-block text-center text-xl font-bold border-[0.3px] border-[#ccc] bg-[#2ebaee] w-[22%] md:w-[10%]">Action</span>
        </div>
        {listItems}
      </div>
    </>
  );
}
