import React from "react";
import { FaBell } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

interface Reminder {
  id: number;
  title: string;
  crop: string;
  date: string;
  urgent?: boolean;
}

function RemindersCard({ id, title, crop, date, urgent = false }: Reminder) {
  return (
    <div key={id} className="flex items-center justify-between pb-4 py-4 px-6">
      <div className="flex items-center gap-4">
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center ${urgent ? "bg-red-100" : "bg-green-100"}`}
        >
          <FaBell
            className={`h-5 w-5 ${urgent ? "text-red-600" : "text-green-600"}`}
          />
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-muted-foreground">{crop}</div>
        </div>
      </div>
      <div className="text-sm font-medium">{date}</div>
    </div>
  );
}

export default RemindersCard;
