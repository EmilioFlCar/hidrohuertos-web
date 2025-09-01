import { Card } from "@radix-ui/themes";
import React from "react";

type MetricCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
};

function MetricCard({ title, value, icon, description }: MetricCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
      <div className="p-4 flex flex-col gap-2">
        {/* Encabezado con título e ícono */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-800 font-medium">{title}</h2>
          <div className="text-primary text-xl">{icon}</div>
        </div>

        {/* Valor principal */}
        <p className="text-2xl font-bold text-gray-900">{value}</p>

        {/* Descripción */}
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </Card>
  );
}

export default MetricCard;
