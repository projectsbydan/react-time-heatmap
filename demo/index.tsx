import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { ITimeEntry } from "../src/interfaces/iTimeEntry";
import { TimeHeatMap } from "../src/timeHeatMap";
import { getTimeEntries } from "./example";

const App = () => {
  const [entries, setEntries] = useState<ITimeEntry[]>([]);

  useEffect(() => {
    setInterval(() => {
      const data = getTimeEntries();
      setEntries(data);
    }, 1000);
  }, []);

  return (
    <TimeHeatMap
      timeEntries={entries}
      showCounts={false}
      numberOfGroups={4}
      textForNoTimeEntries="No time entries"
      flow={false}
    />
  );
};

const container = document.getElementById("root");
render(<App />, container);
