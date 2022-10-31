import React, { useState, useEffect, useRef } from "react";

function HomeWork95() {
  //const id = String(Math.round(Math.random() * 12));
  const url =
    `https://reqres.in/api/users/` + String(Math.round(Math.random() * 12));
  const [users, setUsers] = useState([]);
  const [isDetailed, setIsDetailed] = useState(false);
  const buttonText = useRef("Show");

  async function fetchUser() {
    const response = await fetch(url);
    const result = await response.json();
    setUsers([...users, result.data]);
  }

  function showUser() {
    if (isDetailed) {
      return users.map((userInfo) => {
        return (
          <div key={userInfo.id}>
            {" "}
            <h4 key={userInfo.id} className="text-muted">
              {" "}
              {userInfo.first_name} {userInfo.last_name}
            </h4>
            <a
              href={userInfo.email}
              key={userInfo.id}
              target="_blank"
              rel="noreferrer"
            >
              {userInfo.email}
            </a>
            <br />
            <img
              key={userInfo.id}
              src={userInfo.avatar}
              alt="Avatar"
              className="shadow rounded"
            />
            <hr />
          </div>
        );
      });
    } else {
      return users.map((userInfo) => {
        return (
          <div key={userInfo.id} className="m-3">
            {" "}
            <h4 key={userInfo.id} className="text-muted">
              {" "}
              {userInfo.first_name} {userInfo.last_name}
            </h4>
          </div>
        );
      });
    }
  }
  useEffect(() => {
    // console.log(isDetailed);
  }, [isDetailed]);

  function removeUser() {
    users.pop();
    setUsers([...users]);
  }

  function showDetails() {
    if (isDetailed) {
      buttonText.current = "Show";
      setIsDetailed(false);
    } else {
      buttonText.current = "Hide";
      setIsDetailed(true);
    }
  }

  return (
    <div className="Homework95 container-fluid">
      <h3 className="text-success fw-bold m-5">Hello user</h3>
      <hr />
      {showUser()}
      <button onClick={fetchUser} className="button-41">
        Show user
      </button>
      <button className="button-41" onClick={removeUser}>
        Remove user
      </button>
      <button className="button-41" onClick={showDetails}>
        {buttonText.current} more information
      </button>
    </div>
  );
}

export default HomeWork95;
