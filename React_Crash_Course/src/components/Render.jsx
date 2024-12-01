import React from 'react'
import Person from "./components/Person";
// import Mobile from "./components/Mobile";
import Counter from "./components/Counter";
import Map from "./components/Map";

// import Filter from './components/Filter'

// import UseEffect from "./components/UseEffect";
// import FetchDataFromAPI from "./components/FetchDataFromAPI";

import HandleForm from "./components/HandleForm";

const Render = () => {
     const handleClick = (data) => {
       alert("Button was clicked..!" + data);
     };
  return (
    <div>
      {/* <Person  name="shyaam" age={200} salary={100} />
      <Person name="ram" age={100} />
      <Person name="ghanshyaam" age={20} /> */}

      {/* <button onClick={()=>handleClick(300)}>Click Me</button> */}

      {/* <Counter /> */}
      {/* <Map /> */}

      {/* <Filter /> */}

      {/* <UseEffect /> */}

      {/* <FetchDataFromAPI /> */}

      <HandleForm />
    </div>
  );
}

export default Render