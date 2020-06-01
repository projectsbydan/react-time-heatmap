# react-time-heatmap

[![Netlify Status](https://api.netlify.com/api/v1/badges/924b2f51-6e9a-4b3b-8cef-4195fffe6302/deploy-status)](https://app.netlify.com/sites/react-time-heatmap/deploys)

## Show a heatmap based on the time of day for a week

The component takes in time entries and displays the count as a heatmap.

✔ You can add entries for an unlimited number of days

✔ Select the number of groups/levels to show in colours

✔ Can be made to flow, to use all space it has responsively

## Basic setup

| Description                                       | Example                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------ |
| Shows entries from 7 days separated into 4 groups | ![Basic setup image](https://react-time-heatmap-img.netlify.app/7_4.gif) |

Code Example:

```typescript
<TimeHeatMap timeEntries={entries} />
```

## Custom days and group size

| Description                                        | Example                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| Shows entries from 10 days separated into 7 groups | ![Basic setup image](https://react-time-heatmap-img.netlify.app/10_7.gif) |

Code Example:

```typescript
<TimeHeatMap timeEntries={entries} numberOfGroups={7} />
```
