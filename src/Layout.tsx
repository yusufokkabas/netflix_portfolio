import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/NavBar";
import BackButton from "./components/BackButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Don't show back button on main navigation pages
  const hideBackButton =
    ["/", "/browse"].includes(location.pathname) ||
    location.pathname.startsWith("/profile/");

  return (
    <div>
      <Navbar />
      {!hideBackButton && <BackButton className="fixed" />}
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
