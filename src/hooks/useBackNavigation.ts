import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

export const useBackNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = useCallback(
    (fallbackPath?: string) => {
      // Check if there's history to go back to
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        // If no history, go to a fallback path or browse page
        navigate(fallbackPath || "/browse");
      }
    },
    [navigate]
  );

  const canGoBack = useCallback(() => {
    return window.history.length > 1;
  }, []);

  return {
    goBack,
    canGoBack,
    currentPath: location.pathname,
  };
};
