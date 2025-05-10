import React from "react";
import AppHeader from "@/components/dashboard/AppHeader";
import Header from "@/components/Header";

function page() {
  return (
    <div>
      <Header variant="app" />
      <h1 className="text-3xl font-bold text-black">Dashboard</h1>
    </div>
  );
}

export default page;
