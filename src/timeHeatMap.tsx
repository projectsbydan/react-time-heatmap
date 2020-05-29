import React from "react";
import styles from "./common/index.sass";
import { ITimeEntry } from "./interfaces/iTimeEntry";
import { ITimeHeapMapProps } from "./interfaces/iTimeHeatMapProps";

const hours: string[] = [
  "00",
  "02",
  "04",
  "06",
  "08",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
];

export const TimeHeatMap = (props: ITimeHeapMapProps) => {
  if (props.timeEntries.length === 0) {
    return <div>{props.textForNoTimeEntries || "No time entries"}</div>;
  }

  const timeEntries = props.timeEntries
    .sort((a, b) => (a.time < b.time ? -1 : 1))
    .slice()
    .sort((a, b) => (a.time.getHours() < b.time.getHours() ? -1 : 1));

  const numberOfDays = (timeEntries.length / 24) | 0;

  const maxCount = Math.max(...timeEntries.map((x) => x.count));
  const numberOfGroups = props.numberOfGroups || 4;
  const limits: number[] = [];
  for (let i = 1; i <= numberOfGroups; i++) {
    limits.push(((maxCount / numberOfGroups) * i) | 0);
  }

  const getGroupNumber = (value: number) => {
    for (let i = 0; i < limits.length; i++) {
      if (value <= limits[i]) {
        return i + 1;
      }
    }
  };

  const getEntryClassName = (entry: ITimeEntry) => {
    const classes: string[] = [styles.timeEntry];

    if (entry.count !== 0) {
      classes.push(styles.withCount);
    }

    return classes.join(" ");
  };

  const getMainClassName = () => {
    const classes: string[] = [styles.timeHeatMap];
    if (props.flow) {
      classes.push(styles.flow);
    }

    return classes.join(" ");
  };

  return (
    <section className={getMainClassName()}>
      <div className={styles.mapContainer}>
        <article
          className={styles.map}
          style={{ gridTemplateColumns: `repeat(${numberOfDays},1fr)` }}
        >
          {timeEntries.map((x) => (
            <div
              key={x.time.getTime()}
              title={`${x.count}`}
              className={getEntryClassName(x)}
              style={{
                opacity: (1 / numberOfGroups) * getGroupNumber(x.count),
              }}
            >
              {props.showCounts ? x.count : null}
            </div>
          ))}
        </article>
        <article className={styles.hours}>
          {hours.map((x) => (
            <div key={x}>{x}</div>
          ))}
        </article>
      </div>
      <article
        className={styles.legend}
        style={{ gridTemplateColumns: `repeat(${numberOfGroups}, 1fr)` }}
      >
        {limits.map((x, i) => (
          <div key={i}>
            <div
              className={styles.legendEntry}
              style={{ opacity: (1 / numberOfGroups) * (i + 1) }}
            ></div>
            {x}
          </div>
        ))}
      </article>
    </section>
  );
};
