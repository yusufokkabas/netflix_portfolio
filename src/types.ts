// types.ts

export interface ProfileBanner {
  backgroundImageUrl: string;
  headline: string;
  resumelink: {
    url: string;
  };
  linkedinlink: string;
  profilesummary: string;
}

export interface TimelineItem {
  timelinetype: "work" | "education";
  name: string;
  title: string;
  techstack: string;
  summarypoints: string;
  daterange: string;
  date: string;
}

export interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilepicture: { url: string };
  name: string;
  title: string;
  summary: string;
  companyuniversity: string;
  linkedinlink: string;
  email: string;
  phonenumber: string;
}

export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}
