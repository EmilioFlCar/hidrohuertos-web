import { create } from "zustand";

export interface Crop {
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
}
