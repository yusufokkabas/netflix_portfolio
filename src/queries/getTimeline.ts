// queries/getTimeline.ts
import datoCMSClient from "./datoCMSClient";
import { TimelineItem } from "../types";

const GET_TIMELINE = `
{
  allTimelines {
   	name
    timelinetype
    title
    techstack
    summarypoints
    daterange
    date
  }
}
`;

export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await datoCMSClient.request<{ allTimelines: TimelineItem[] }>(
    GET_TIMELINE
  );
  return data.allTimelines.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
