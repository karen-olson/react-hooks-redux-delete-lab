import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onBandSubmit(name);
    setName("");
  }

  function createFakeBands() {
    ["a", "b", "c", "d"].forEach((fakeBandName) => onBandSubmit(fakeBandName));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Band</button>
      </form>
      <button onClick={createFakeBands}>Create Fake Bands</button>
    </>
  );
}

export default BandInput;
