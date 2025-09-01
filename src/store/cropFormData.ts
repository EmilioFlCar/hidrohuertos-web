import { create } from "zustand";

export type CropFormData = {
  plantName: string;
  plantType: string;
  startDate: string;
  description: string;
  systemType: string;
  targetPh: number;
  autoReminders: boolean;
  waterChangeFrequency: string;
  nutrientsFrequency: string;
  phCheckFrequency: string;
};

type CropFormState = CropFormData & {
  setBasicInfo: (
    data: Partial<
      Pick<
        CropFormData,
        "plantName" | "plantType" | "startDate" | "description"
      >
    >,
  ) => void;

  setConfigInfo: (
    data: Partial<Pick<CropFormData, "systemType" | "targetPh">>,
  ) => void;

  setReminderInfo: (
    data: Partial<
      Pick<
        CropFormData,
        | "autoReminders"
        | "waterChangeFrequency"
        | "nutrientsFrequency"
        | "phCheckFrequency"
      >
    >,
  ) => void;

  errors: Partial<Record<keyof CropFormData, string>>;
  resetForm: () => void;
  setErrors: (errors: Partial<Record<keyof CropFormData, string>>) => void;
};

// 1. Create a new Date object for the current local time
const today = new Date();

// 2. Format the date to 'YYYY-MM-DD' using local methods
const day = today.getDate().toString().padStart(2, "0");
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const year = today.getFullYear();
const todayStr = `${year}-${month}-${day}`;

const initialState: CropFormData = {
  plantName: "",
  plantType: "",
  startDate: "",
  description: "",
  systemType: "",
  targetPh: 6.0,
  autoReminders: true,
  waterChangeFrequency: "Cada 2 horas",
  nutrientsFrequency: "Semanal",
  phCheckFrequency: "Cada 2 horas",
};

export const useCropFormStore = create<CropFormState>((set) => ({
  ...initialState,

  setBasicInfo: (data) => set((state) => ({ ...state, ...data })),
  setConfigInfo: (data) => set((state) => ({ ...state, ...data })),
  setReminderInfo: (data) => set((state) => ({ ...state, ...data })),
  resetForm: () => set(initialState),
  errors: {},
  setErrors: (errors) => set({ errors }),
}));
