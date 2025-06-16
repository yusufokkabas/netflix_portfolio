import { useNavigate } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContext";

export const useProfileNavigation = () => {
  const navigate = useNavigate();
  const { currentProfile, setCurrentProfile } = useProfile();

  const navigateToHome = () => {
    if (currentProfile) {
      navigate(`/profile/${currentProfile.name}`);
    } else {
      navigate("/browse");
    }
  };

  const navigateToProfile = (profileName: string) => {
    if (currentProfile && currentProfile.name === profileName) {
      // Already on the correct profile page
      navigate(`/profile/${profileName}`);
    } else {
      // Navigate to browse to select profile
      navigate("/browse");
    }
  };

  const navigateWithProfile = (path: string) => {
    // Navigate to a page while maintaining profile context
    navigate(path);
  };

  return {
    navigateToHome,
    navigateToProfile,
    navigateWithProfile,
    currentProfile,
    setCurrentProfile,
  };
};
