import React, { useState } from 'react';



function App() {

  const [col1, setCol1] = useState();
  const [col2, setCol2] = useState();
  const [col3, setCol3] = useState();
  function handleSave(e) {
    e.preventDefault();
    if (col1 === "red") {
      setCol1("white");
      setCol2("yellow");
    } else if (col2 === "yellow") {
      setCol2("white");
      setCol3("green");
    } else {
      setCol3("white");
      setCol1("red");
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-200 w-32 rounded-lg shadow-lg ml-[600px]">
    <div
      className="w-16 h-16 rounded-full bg-red-500 shadow-md"
      style={{ backgroundColor: col1 }}
    ></div>
  
    <div
      className="w-16 h-16 rounded-full bg-white shadow-md"
      style={{ backgroundColor: col2 }}
    ></div>
  
    <div
      className="w-16 h-16 rounded-full bg-white shadow-md"
      style={{ backgroundColor: col3 }}
    ></div>

<button onClick={handleSave} className="bg-white mt-5 px-3 py-1">
  click
 </button>
  </div>
   
  
  )
}

export default App

