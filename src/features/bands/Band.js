import React from "react";
import { bandRemoved } from "./bandsSlice";
import { useDispatch } from "react-redux";

const Band = ({ band }) => {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(bandRemoved(band.id));
  }

  return (
    <>
      <li>{band.name}</li>
      <button onClick={handleDeleteClick}>Delete Band</button>
    </>
  );
};

export default Band;
