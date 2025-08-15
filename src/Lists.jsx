import { useState } from "react";
import "./index.css"

function Lists() {
  const [fruits, setFruits] = useState(["Apple", "Mango", "Orange"]);


  //Add food
  function addFruit() {

   const newfoods = document.getElementById("foodInput").value.trim()
    if (newfoods === "") {
      return; // empty ya sirf spaces ho to kuch add mat karo
    }
   document.getElementById("foodInput").value = ""
   setFruits(f => [...f,newfoods])
  }
// remove the item
 function removefood(index){
     setFruits(fruits.filter((_, i) => i !== index));
 }
  return (
    <div className="container">
      <h2>List of Fruits 🍓</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} 
          onClick={()=>removefood(index)
            }
           style={{ cursor: "pointer" }}
           >
            {fruit}
            </li>
        ))}
      </ul>
      <input type="text" placeholder="Add Fruits" id="foodInput"/>
      <button onClick={addFruit}>Add Fruits</button>
    </div>
  );
}

export default Lists;
