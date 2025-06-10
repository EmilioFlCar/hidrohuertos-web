import React from "react";
import { useCropFormStore } from "../../../store/cropFormData";

function ReminderForm() {
  const {
    autoReminders,
    waterChangeFrequency,
    nutrientsFrequency,
    phCheckFrequency,
    setReminderInfo,
  } = useCropFormStore();

  const handleToggleChange = () => {
    setReminderInfo({ autoReminders: !autoReminders });
  };

  return (
    <div className="mt-4">
      <div className="space-y-4">
        <div>
          <div className="flex flex-row items-center justify-between">
            <div className="">
              <h1 className="font-semibold">Recordatorios automáticos</h1>
              <h1>
                Recibe notificaciones automáticas basadas en el tipo de cultivo
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                checked={autoReminders}
                onChange={handleToggleChange}
                className="toggle"
              />
            </div>
          </div>
        </div>
        <div>
          <label className="text-sm">Cambio de agua</label>
          <select
            className="select select-sm w-full"
            disabled={!autoReminders}
            value={waterChangeFrequency}
            onChange={(e) =>
              setReminderInfo({ waterChangeFrequency: e.target.value })
            }
          >
            <option>Cada 2 horas</option>
            <option>Cada 4 horas</option>
            <option>Cada 6 horas</option>
          </select>
        </div>
        <div>
          <label className="text-sm"> Añadir nutrientes </label>
          <select
            className="select select-sm w-full"
            disabled={!autoReminders}
            value={nutrientsFrequency}
            onChange={(e) =>
              setReminderInfo({ nutrientsFrequency: e.target.value })
            }
          >
            <option>Semanal</option>
            <option>Quincenal</option>
            <option>Mensual</option>
          </select>
        </div>
        <div>
          <label className="text-sm">Revisar pH</label>
          <select
            className="select select-sm w-full"
            disabled={!autoReminders}
            value={phCheckFrequency}
            onChange={(e) =>
              setReminderInfo({ phCheckFrequency: e.target.value })
            }
          >
            <option>Cada 2 horas</option>
            <option>Cada 4 horas</option>
            <option>Cada 6 horas</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ReminderForm;
