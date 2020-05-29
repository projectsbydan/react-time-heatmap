import { ITimeEntry } from "./iTimeEntry";

export interface ITimeHeapMapProps {
  timeEntries: ITimeEntry[];
  showCounts?: boolean;
  flow?: boolean;
  numberOfGroups?: number;
}
