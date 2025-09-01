"use client";
import React, { use, useEffect } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { SegmentedControl } from "@radix-ui/themes";
import SummaryPanel from "@/components/dashboard/SummaryPanel";
import ActiveCropsPanel from "@/components/dashboard/ActiveCropsPanel";
import RemindersPanel from "@/components/dashboard/RemindersPanel";

function page() {
  const [currentView, setCurrentView] = React.useState<string>("summary");
  const views = [
    { label: "Resumen", value: "summary" },
    { label: "Cultivos Activos", value: "active" },
    { label: "Recordatorios", value: "reminders" },
  ];
  const renderContent = () => {
    switch (currentView) {
      case "summary":
        return <SummaryPanel />;
      case "active":
        return <ActiveCropsPanel />;
      case "reminders":
        return <RemindersPanel />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header variant="app" />
      <div className="flex flex-col gap-4 px-4 py-4 md:px-6 md:py-4 lg:px-8 lg:py-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-black">
            Dashboard
          </h1>
          <h1 className="text-sm sm:text-lg text-gray-500">
            Gestiona tus cultivos hidropónicos y monitorea su progreso.
          </h1>
        </div>
        <div className="w-full overflow-x-auto">
          {/* Mobile */}
          <div className="block md:hidden items-center justify-center">
            <SegmentedControl.Root
              defaultValue="summary"
              size="1"
              onValueChange={setCurrentView}
            >
              {views.map((view) => (
                <SegmentedControl.Item key={view.value} value={view.value}>
                  {view.label}
                </SegmentedControl.Item>
              ))}
            </SegmentedControl.Root>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <SegmentedControl.Root
              defaultValue="summary"
              size="3"
              onValueChange={setCurrentView}
            >
              {views.map((view) => (
                <SegmentedControl.Item key={view.value} value={view.value}>
                  {view.label}
                </SegmentedControl.Item>
              ))}
            </SegmentedControl.Root>
          </div>
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default page;
