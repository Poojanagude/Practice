import { useState } from "react";


function App() {
  // const [color, setColor] = useState("olive");
  const [color, setColor] = useState(" ")

  return (
    <div
      className="w-full h-screen duration-200"
       style={{backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-3 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-3 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
            onClick={()=>setColor("green")}
          >
            green
          </button>
          <button
           onClick={()=>setColor("yellow")}
            className="outline-none px-3 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
           onClick={()=>setColor("blue")}
            className="outline-none px-3 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
           onClick={()=>setColor("olive")}
            className="outline-none px-3 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
           onClick={()=>setColor("black")}
            className="outline-none px-3 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
           onClick={()=>setColor("cyan")}
            className="outline-none px-3 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
