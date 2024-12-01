import React, { useState } from "react";

const HandleForm = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [flag, setflag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("your form has been submitted..");

    setflag(true);
  };

  return (
    <div>
      <h1>Form Handling</h1>

      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />
        Password : -{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      {flag && (
        <div>
          <h2>Name: - {name}</h2>
          <h2>Email :- {email}</h2>
          <h2>Password :- {password}</h2>
        </div>
      )}
    </div>
  );
};

export default HandleForm;
