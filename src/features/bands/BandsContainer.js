import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BandInput from "./BandInput";
import Band from "./Band";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  const bandComponents = bands.map((band) => (
    <Band key={band.id} band={band} />
  ));

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>{bandComponents}</ul>
    </div>
  );
}

export default BandsContainer;
