import { Card } from "@radix-ui/themes";
import React from "react";
import MetricCard from "./summary/MetricCard";
import { FaBell, FaCalendarCheck, FaDroplet, FaLeaf } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import CropProgressCard from "./summary/CropSummaryProgressCard";
import RemindersCard from "./summary/RemindersCard";
import { useCropStore } from "@/store/cropStore";
import {
  calcularDiasRestantes,
  calcularProgresoPorNombre,
} from "@/utils/cropsUtils";

function SummaryPanel() {
  const crops = useCropStore((state) => state.crops);

  const nearHarvestCrops = crops.filter(
    (crop) => calcularDiasRestantes(crop.plant_type, crop.start_date) < 7,
  );

  const metrics = [
    {
      title: "Cultivos activos",
      value: 3,
      icon: <FaLeaf className="w-5 h-5 text-hydrogreen" />,
      description: "Actualmente en producción",
    },
    {
      title: "Próximas cosechas",
      value: nearHarvestCrops.length,
      icon: <FaCalendarCheck className="w-5 h-5 text-hydrogreen" />,
      description: "En los próximos 7 días",
    },
    {
      title: "Cultivos completados",
      value: 0,
      icon: <FaCheckCircle className="w-5 h-5 text-hydrogreen" />,
      description: "Finalizados con éxito",
    },
    {
      title: "Recordatorios pendientes",
      value: 1,
      icon: <FaBell className="w-5 h-5 text-hydrogreen" />,
      description: "Acciones requeridas hoy",
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full py-4">
      {/* Tarjetas de métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            icon={metric.icon}
          />
        ))}
      </div>

      {/* Progreso semanal y estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        <Card className="col-span-1 md:col-span-4 p-4 h-fit">
          <div className="py-4 px-6">
            <p className="text-lg font-semibold">Cultivos detacados</p>
            <p className="text-muted-foreground">
              Tus cultivos con mayor progreso
            </p>
          </div>
          {crops.map((crop, index) => (
            <CropProgressCard
              key={index}
              cropName={crop.plant_name}
              progress={calcularProgresoPorNombre(
                crop.plant_type,
                crop.start_date,
              )}
              daysRemaining={calcularDiasRestantes(
                crop.plant_type,
                crop.start_date,
              )}
            />
          ))}
        </Card>
        <Card className="col-span-1 md:col-span-3 p-4 h-fit">
          <div className="py-4 px-6">
            <p className="text-lg font-semibold">Notificaciones</p>
            <p className="text-muted-foreground">
              Aquí puedes ver tus notificaciones recientes y recordatorios de
              acciones pendientes.
            </p>
          </div>
          {mockReminders.map((reminder) => (
            <RemindersCard
              key={reminder.id}
              id={reminder.id}
              title={reminder.title}
              crop={reminder.crop}
              date={reminder.date}
              urgent={reminder.urgent}
            />
          ))}
        </Card>
      </div>
    </div>
  );
}

const mockReminders = [
  {
    id: 1,
    title: "Añadir nutrientes",
    crop: "Lechuga 2",
    date: "Hoy",
    urgent: true,
    // icon: Droplet,
  },
  {
    id: 2,
    title: "Revisar PH",
    crop: "Lechuga 2",
    date: "Mañana",
    urgent: false,
    // icon: Droplet,
  },
  // {
  //   id: 3,
  //   title: "Revisar pH",
  //   crop: "Tomate Cherry",
  //   date: "En 2 días",
  //   urgent: false,
  //   // icon: FaDroplet,
  // },
  {
    id: 4,
    title: "Cosecha lista",
    crop: "Lechuga",
    date: "En 3 días",
    urgent: false,
    // icon: Calendar,
  },
];
export default SummaryPanel;
