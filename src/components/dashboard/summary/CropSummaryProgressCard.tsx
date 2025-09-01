import { Progress } from "@radix-ui/themes";
import React from "react";
import { FaDroplet } from "react-icons/fa6";

interface CropProgressCardProps {
  cropName: string;
  progress: number;
  daysRemaining: number;
}

function CropProgressCard({
  cropName,
  progress,
  daysRemaining,
}: CropProgressCardProps) {
  return (
    <div className="py-4 px-6">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <FaDroplet className="h-4 w-4 text-green-600" />
          </div>
          <div>
            <div className="font-medium">{cropName}</div>
            <div className="text-xs text-muted-foreground">
              {progress} % completado
            </div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {daysRemaining} días restantes
        </div>
      </div>
      <Progress
        value={Math.min(progress, 100)}
        max={100}
        size="3"
        color="green"
        className="w-full mt-2"
      />
    </div>
  );
}

export default CropProgressCard;
