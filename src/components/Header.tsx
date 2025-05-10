import React from "react";
import LandingHeader from "./landing/LandingHeader";
import AppHeader from "./dashboard/AppHeader";

function Header({ variant }: { variant: "landing" | "app" }) {
  return <div>{variant == "landing" ? <LandingHeader /> : <AppHeader />}</div>;
}

export default Header;
