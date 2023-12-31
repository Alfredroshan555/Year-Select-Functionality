import { useRef, useState } from "react";

import "./App.css";
import { YearSelect } from "./YearSelect";

function App() {
  const [middleName, setMiddleName] = useState("");
  const [userData, setUserData] = useState<any>({});
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
  });
  const value = useRef(5);
  let test = 10;
  console.log("10", test);

  const firstNameRef = useRef<any>(null);
  const lastNameRef = useRef<any>(null);

  const handleSubmit = () => {
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    };
    if (data.firstName === "" || data.lastName === "") {
      // alert("Please fill the details")
      if (data.firstName === "") {
        setError({
          firstName: true,
          lastName: false,
        });
        firstNameRef.current.focus();
      } else if (data.lastName === "") {
        setError({
          firstName: false,
          lastName: true,
        });
        lastNameRef.current.focus();
      }
    } else {
      setUserData(data);
      setError({
        firstName: false,
        lastName: false,
      });
      console.log("data", data);
    }
  };

  return (
    <>
      <div>
        <br />
        <YearSelect />
        {/* <h4>User Info</h4>
        <div>First Name : {userData.firstName}</div>
        <div>Middle Name {middleName}</div>
        <div>Last Name : {userData.lastName}</div>
        <input
          type="text"
          style={{ border: error.firstName ? "1px solid red" : "" }}
          ref={firstNameRef}
          name="firstName"
          id=""
        />{" "}
        <br />
        <input
          type="text"
          style={{ border: error.lastName ? "1px solid red" : "" }}
          ref={lastNameRef}
          name="lastName"
          id=""
        />{" "}
        <br />
        <input
          type="text"
          onChange={(e) => setMiddleName(e.target.value)}
          id=""
        />{" "}
        <br />
        <button onClick={handleSubmit}>Submit</button> */}
      </div>
    </>
  );
}

export default App;
