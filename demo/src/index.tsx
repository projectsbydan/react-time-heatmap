import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { ITimeEntry, TimeHeatMap } from "react-time-heatmap";
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
      numberOfGroups={7}
      showGroups={true}
      showHours={true}
      flow
      textForNoTimeEntries="No time entries"
    />
  );
};

const container = document.getElementById("root");
render(<App />, container);
