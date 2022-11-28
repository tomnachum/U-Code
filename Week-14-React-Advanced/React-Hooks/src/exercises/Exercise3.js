import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchExpenses } from "../data/utils";

export default function Exercise3() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [monthIdx, setMonthIdx] = useState(0);
  const [monthInfo, setMonthInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let monthData = await fetchExpenses(monthIdx);
      setMonthInfo(monthData);
    }
    fetchData();
  }, [monthIdx]);

  function handleChange(e) {
    setMonthIdx(months.indexOf(e.target.value));
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select
          name="month"
          id="month"
          value={months[monthIdx]}
          onChange={handleChange}
        >
          {months.map((m, i) => (
            <option key={i}>{m}</option>
          ))}
        </select>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {monthInfo.map((data, i) => (
              <tr key={i}>
                <td>{data.item}</td>
                <td>{data.date}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
