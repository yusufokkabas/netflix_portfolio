import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./ProfilePage.css";

import ProfileBanner from "./ProfileBanner";
import TopPicksRow from "./TopPicksRow";
import ContinueWatching from "./ContinueWatching";
import { useProfile, ProfileType } from "../contexts/ProfileContext";

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const { currentProfile, setCurrentProfile } = useProfile();
  const { profileName } = useParams<{ profileName: string }>();

  console.log("🚀 ~ ProfilePage ~ location:", location);
  console.log("🚀 ~ ProfilePage ~ currentProfile:", currentProfile);

  // Sync profile with URL parameter if needed
  React.useEffect(() => {
    if (
      profileName &&
      (!currentProfile || currentProfile.name !== profileName)
    ) {
      // If URL profile doesn't match cached profile, update the cached profile
      const validProfiles = ["recruiter", "developer", "stalker", "adventurer"];
      if (validProfiles.includes(profileName)) {
        const profileData = {
          name: profileName as ProfileType,
          image: location.state?.profileImage || "",
          backgroundGif:
            location.state?.backgroundGif ||
            "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
        };
        setCurrentProfile(profileData);
      }
    }
  }, [profileName, currentProfile, setCurrentProfile, location.state]);

  // Use cached profile data if available, otherwise fallback to URL params and location state
  const backgroundGif =
    currentProfile?.backgroundGif ||
    location.state?.backgroundGif ||
    "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF

  const profile =
    currentProfile?.name ||
    (["recruiter", "developer", "stalker", "adventurer"].includes(profileName!)
      ? (profileName as ProfileType)
      : "recruiter");
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
