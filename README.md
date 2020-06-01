# react-time-heatmap

[![Netlify Status](https://api.netlify.com/api/v1/badges/924b2f51-6e9a-4b3b-8cef-4195fffe6302/deploy-status)](https://app.netlify.com/sites/react-time-heatmap/deploys)

## Show a heatmap based on the time of day for a week

😎 Demo: https://react-time-heatmap.netlify.app/

The component takes in time entries and displays the count as a heatmap.

✔ You can add entries for an unlimited number of days

✔ Select the number of groups/levels to show in colours

✔ Can be made to flow, to use all space it has responsively

## Examples

Shows entries from 7 days separated into 4 groups

```typescript
<TimeHeatMap timeEntries={entries} />
```

Shows entries into a custom number of groups

```typescript
<TimeHeatMap timeEntries={entries} numberOfGroups={7} />
```

Shows count for every hour

```typescript
<TimeHeatMap timeEntries={entries} showCounts={true} />
```

## Available options

| Option               | Required | Description                                                 | Default value       |
| -------------------- | -------- | ----------------------------------------------------------- | ------------------- |
| timeEntries          | yes      | array of entries, needs to have 24 entries per day          | `[]`                |
| numberOfGroups       | no       | the number of groups to split the colours into              | `4`                 |
| flow                 | no       | allow the component to take the full width of its container | `false`             |
| textForNoTimeEntries | no       | custom text to show when there are no entries loaded        | `"No time entries"` |
| showCounts           | no       | shows the counts for every hour, for testing                | `false`             |

## Entries example (shortened)

![Entries example](https://react-time-heatmap-img.netlify.app/entries.png)

✔ time. minute or time zone are not relevant

✔ the time needs to be a valid date

✔ the entries will be sorted by the component

👏 typescript will make sure you type everything right

## Examples

| Base example                                                        | Custom nr. groups                                                         | Show counts                                                            |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Base example](https://react-time-heatmap-img.netlify.app/7_4.gif) | ![Custom nr. groups](https://react-time-heatmap-img.netlify.app/10_7.gif) | ![Show counts](https://react-time-heatmap-img.netlify.app/numbers.gif) |

Flow enabled, responsive

![Show counts](https://react-time-heatmap-img.netlify.app/flow.gif)

## About

- made with React Hooks
- uses CSS Grid to create the arrangement
- styles applied with sass modules
- support by any browser that supports grids (not IE)
