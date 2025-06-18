// queries/getProjects.ts
import datoCMSClient from "./datoCMSClient";
import { Project } from "../types";

const GET_PROJECTS = `
  query {
    allProjects {
      title
      description
      techused
      image {
        url
      }
      shortdescription
      createddate
      link
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(
    GET_PROJECTS
  );
  return data.allProjects.sort(
    (a, b) =>
      new Date(b.createddate).getTime() - new Date(a.createddate).getTime()
  );
}
