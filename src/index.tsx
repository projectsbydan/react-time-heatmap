import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { getTimeEntries } from "./example";
import { ITimeEntry } from "./interfaces/iTimeEntry";
import { TimeHeatMap } from "./timeHeatMap";

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
