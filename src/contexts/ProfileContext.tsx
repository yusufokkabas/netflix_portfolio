import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import blueImage from "../images/blue.png";
import greyImage from "../images/grey.png";
import redImage from "../images/red.png";
import yellowImage from "../images/yellow.png";

export type ProfileType = "recruiter" | "developer" | "stalker" | "adventurer";

export interface ProfileData {
  name: ProfileType;
  image: string;
  backgroundGif: string;
}

interface ProfileContextType {
  currentProfile: ProfileData | null;
  setCurrentProfile: (profile: ProfileData) => void;
  clearProfile: () => void;
  isProfileSelected: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const defaultProfiles: Record<ProfileType, ProfileData> = {
  recruiter: {
    name: "recruiter",
    image: blueImage,
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif",
  },
  developer: {
    name: "developer",
    image: greyImage,
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif",
  },
  stalker: {
    name: "stalker",
    image: redImage,
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif",
  },
  adventurer: {
    name: "adventurer",
    image: yellowImage,
    backgroundGif:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmxib24ycWo2cjlmazh0NGV5NTZ2Mzd2YWY0M2tvam9oYXBwYW1ocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ERKMnDK6tkzJe8YVa3/giphy-downsized-large.gif",
  },
};

interface ProfileProviderProps {
  children: ReactNode;
}

const PROFILE_STORAGE_KEY = "netflix-portfolio-profile";

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
}) => {
  const [currentProfile, setCurrentProfileState] = useState<ProfileData | null>(
    null
  );

  // Load profile from localStorage on mount
  useEffect(() => {
    const savedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (savedProfile) {
      try {
        const parsedProfile: ProfileData = JSON.parse(savedProfile);
        // Validate that the profile is still valid
        if (defaultProfiles[parsedProfile.name]) {
          setCurrentProfileState(parsedProfile);
        } else {
          // If invalid, clear the storage
          localStorage.removeItem(PROFILE_STORAGE_KEY);
        }
      } catch (error) {
        console.error("Error parsing saved profile:", error);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
      }
    }
  }, []);

  const setCurrentProfile = (profile: ProfileData) => {
    setCurrentProfileState(profile);
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  };

  const clearProfile = () => {
    setCurrentProfileState(null);
    localStorage.removeItem(PROFILE_STORAGE_KEY);
  };

  const value: ProfileContextType = {
    currentProfile,
    setCurrentProfile,
    clearProfile,
    isProfileSelected: currentProfile !== null,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

// Helper function to get profile data by name
export const getProfileByName = (name: string): ProfileData | null => {
  const profileName = name as ProfileType;
  return defaultProfiles[profileName] || null;
};
