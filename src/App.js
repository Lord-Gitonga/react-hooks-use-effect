import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  
  useEffect(() => {
    document.title = text;
    console.log('Hello')
  }, [text])

  useEffect(() => {
    setTimeout(()=>setCount(0), 5000)
    
  }, []);

  console.log("Component rendering");
  function handleClick() {
  setCount(count +1)
}
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>;
      <h1>clicked {count} times</h1>
      <input type="text" placeholder="Type away.." value={text}
      onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}

export default App;
