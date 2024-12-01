import React, { useEffect, useState } from "react";

const FetchDataFromAPI = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await api.json();

      setApiData(data);
      console.log("data is coming = ", data);
    };

    fetchData();
  }, []);

  console.log("data is coming from state = ", apiData);

  return (
    <div>
      <h2>FetchDataFromAPI</h2>
      {apiData.map((data) => (
        <div key={data.id} style={{ textAlign:'center', backgroundColor:'blueviolet',padding:"10px", margin:"20px"}}>
          <h3>{data.name}</h3>
          <h3>{data.email}</h3>
          <h4>{data.username}</h4>
          <p>{data.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchDataFromAPI;
