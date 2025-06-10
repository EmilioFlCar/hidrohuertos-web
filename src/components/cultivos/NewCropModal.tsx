import { SegmentedControl } from "@radix-ui/themes";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useCropFormStore } from "../../store/cropFormData";
import BasicsForm from "./modalViews/BasicsForm";
import ConfigForm from "./modalViews/ConfigForm";
import ReminderForm from "./modalViews/ReminderForm";
import { createClerkSupabaseClient } from "../../../lib/supabase-client";
import { cropSchema } from "@/validation/cropSchema";
import toast, { Toaster } from "react-hot-toast";

function NewCropModal() {
  const [currentView, setCurrentView] = useState("info");
  const client = createClerkSupabaseClient();
  const resetForm = useCropFormStore((state) => state.resetForm);
  const formData = useCropFormStore((state) => state);

  const renderContent = () => {
    switch (currentView) {
      case "info":
        return <BasicsForm />;
      case "config":
        return <ConfigForm />;
      case "reminder":
        return <ReminderForm />;
      default:
        return null;
    }
  };
  const handleSubmit = async () => {
    const { setErrors, errors, ...formData } = useCropFormStore.getState();
    const result = cropSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }
    try {
      const { data, error } = await client.from("crops").insert({
        ...formData,
      });
      if (error) throw error;
      toast.success("Cultivo creado con éxito");
      console.log("🚀 ~ handleSubmit ~ data:", data);
    } catch (err) {
      toast.error("Error al crear el cultivo");
      console.log("Error!", err);
    }

    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.close();
    resetForm();

    setCurrentView("info");
  };
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <button
        className="btn bg-[#4caf50] hover:bg-[#45a049] text-white rounded-md"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1",
          ) as HTMLDialogElement;
          modal?.showModal();
        }}
      >
        <FaPlus size={15} className="m-2" />
        <span className="hidden sm:inline">Nuevo cultivo</span>
        <span className="sm:hidden">Nuevo</span>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="bg-white p-4 sm:p-6 max-w-[90vw] sm:max-w-md w-full rounded-lg">
          <div className="p-2">
            <h1 className="text-lg font-semibold leading-none tracking-tight">
              Añadir nuevo cultivo
            </h1>
            <h1 className="text-sm text-gray-500 mt-2">
              Registra un nuevo cultivo hidropónico para monitorear su
              crecimiento.
            </h1>
          </div>
          <SegmentedControl.Root
            defaultValue="info"
            size={"3"}
            className="w-full"
            onValueChange={setCurrentView}
          >
            <SegmentedControl.Item value="info" className="text-xs sm:text-sm">
              Información
            </SegmentedControl.Item>
            <SegmentedControl.Item
              value="config"
              className="text-xs sm:text-sm"
            >
              Configuración
            </SegmentedControl.Item>
            <SegmentedControl.Item
              value="reminder"
              className="text-xs sm:text-sm"
            >
              Recordatorios
            </SegmentedControl.Item>
          </SegmentedControl.Root>

          {renderContent()}
          <div className="mt-6 flex justify-end gap-2">
            <button
              className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-md text-sm"
              onClick={() => {
                const modal = document.getElementById(
                  "my_modal_1",
                ) as HTMLDialogElement;
                modal?.close();
                resetForm();
              }}
            >
              Cancelar
            </button>
            <button
              className="px-3 py-1.5 bg-hydrogreen text-white rounded-md text-sm"
              onClick={handleSubmit}
            >
              Guardar
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default NewCropModal;
