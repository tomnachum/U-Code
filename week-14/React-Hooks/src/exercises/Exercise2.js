import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const NUM_OF_USERS = 5;

export default function Exercise2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const users = await axios.get(
        `https://randomuser.me/api/?results=${NUM_OF_USERS}`
      );
      setUsers(users.data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map((u, i) => (
          <div className="user" key={i}>
            <p>
              {u.name.first} {u.name.last}
            </p>
            <img src={u.picture.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
