import CropDetailHeader from "@/components/cultivos/CropDetails/CropDetailHeader";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-9 py-4 sm:py-8 w-full h-full min-h-screen">
      <CropDetailHeader />
      <div className="grid grid-cols-3">
        <div className="col-span-2 bg-red-100">
          <h1>Stats</h1>
        </div>
        <div className="col-span-1 bg-blue-100">
          <h1>Info</h1>
        </div>
      </div>
    </div>
  );
}

export default Page;
