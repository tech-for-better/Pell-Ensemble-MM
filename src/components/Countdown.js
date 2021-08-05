import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className="Countdown">
      <div>Countdown: {counter}</div>
    </div>
  );
}
