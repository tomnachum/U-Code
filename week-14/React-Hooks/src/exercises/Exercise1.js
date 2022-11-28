import React from "react";
import { useState } from "react";

export default function Exercise1() {
  const [form, setForm] = useState({
    name: "",
    city: "",
    country: "",
  });

  function handleChange(e) {
    let key = e.target.name;
    let val = e.target.value;
    setForm({ ...form, [key]: val });
  }

  const countries = ["united states", "china", "united kingdom", "australia"];
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
        />
        <select
          name="country"
          id="country"
          value={form.country}
          onChange={handleChange}
        >
          <option value="" hidden>
            Choose country
          </option>
          {countries.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
