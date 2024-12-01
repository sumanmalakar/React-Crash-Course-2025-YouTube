import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(10)

    useEffect(() => {
        console.log("UseEffect is running")

      document.title = counter

    }, [])
    


  return (
    <div>
      <h1>UseEffect Hook</h1>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Click</button>
    </div>
  );
}

export default UseEffect