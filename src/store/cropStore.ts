import { create } from "zustand";

export interface Crop {
  id: string;
  plant_name: string;
  plant_type: string;
  start_date: string; // formato YYYY-MM-DD
  description?: string;
  system_type: string;
  target_ph: number;
  auto_reminders: boolean;
  water_change_frequency: string;
  nutrients_frequency: string;
  ph_check_frequency: string;
  isHarvested?: boolean;
}

interface CropStore {
  crops: Crop[];
  setCrops: (crops: Crop[]) => void;
}

export const useCropStore = create<CropStore>((set) => ({
  crops: [
    {
      id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
      user_id: "user_2woyWgiwz5OR57eACBomhey8sTe",
      plant_name: "Lechuga",
      plant_type: "Lechuga romana",
      start_date: "2025-07-02",
      system_type: "aeroponía",
      target_ph: 6.5,
      isHarvested: true,
      auto_reminders: true,
      water_change_frequency: "Cada 3 horas",
      nutrients_frequency: "Semanal",
      ph_check_frequency: "Cada 3 horas",
      created_at: "2025-05-21T10:15:45.123456+00",
    },
    {
      id: "2807dc32-e7c0-4e41-94e8-02c521f9660d",
      user_id: "user_2woyWgiwz5OR57eACBomhey8sTe",
      plant_name: "Cilantro",
      plant_type: "Cilantro",
      start_date: "2025-07-20",
      description:
        "Cultivo experimental de cilantro en sistema aeropónico para consumo local.",
      system_type: "Aeroponía",
      target_ph: 6,
      auto_reminders: true,
      water_change_frequency: "Cada 2 horas",
      nutrients_frequency: "Semanal",
      ph_check_frequency: "Cada 2 horas",
      created_at: "2025-05-19T09:45:12.123456+00",
      isHarvested: false,
    },
    {
      id: "3f2b1c4d-5e6f-7a8b-9c0d-1e2f3g4h5i6j",
      user_id: "user_2woyWgiwz5OR57eACBomhey8sTe",
      plant_name: "Lechuga 2",
      plant_type: "Lechuga romana",
      start_date: "2025-08-02",
      description:
        "Cultivo de albahaca en sistema NFT, ideal para ensaladas y salsas.",
      system_type: "NFT",
      target_ph: 6.5,
      auto_reminders: true,
      water_change_frequency: "Cada 3 horas",
      nutrients_frequency: "Semanal",
      ph_check_frequency: "Cada 3 horas",
      created_at: "2025-05-20T11:20:34.654321+00",
      isHarvested: false,
    },
    // {
    //   id: "8ff5b9a8-5f38-4465-b1b5-5fb7259c9266",
    //   user_id: "user_2woyWgiwz5OR57eACBomhey8sTe",
    //   plant_name: "Lechuga Mantecosa",
    //   plant_type: "Lechuga",
    //   start_date: "2025-07-18",
    //   description:
    //     "Ensayo de cultivo hidropónico tipo Kratky en etapa de monitoreo inicial.",
    //   system_type: "Kratky",
    //   target_ph: 6,
    //   auto_reminders: true,
    //   water_change_frequency: "Cada 2 horas",
    //   nutrients_frequency: "Semanal",
    //   ph_check_frequency: "Cada 2 horas",
    //   created_at: "2025-05-17T14:30:08.654321+00",
    //   isHarvested: false,
    // },
  ],
  setCrops: (crops: Crop[]) => set({ crops }),
}));
