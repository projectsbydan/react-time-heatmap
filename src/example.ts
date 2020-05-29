import { ITimeEntry } from "./interfaces/iTimeEntry";

export const getTimeEntries = (): ITimeEntry[] => {
  const result: ITimeEntry[] = [];

  const today = new Date();

  // generate 7 days
  for (let i = 0; i < 7; i++) {
    // generate 24 hours
    for (let j = 0; j < 24; j++) {
      // generate date
      const dateWithTime = new Date(today.setHours(j));
      const dateWithDay = new Date(
        dateWithTime.setDate(dateWithTime.getDate() - i)
      );

      result.push({
        count: Math.floor(Math.random() * 5689),
        time: dateWithDay,
      });
    }
  }

  return result;
};
