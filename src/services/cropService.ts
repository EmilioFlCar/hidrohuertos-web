import { CropFormData } from "@/store/cropFormData";
import { Crop, useCropStore } from "@/store/cropStore";
import { SupabaseClient } from "@supabase/supabase-js";

const { setCrops, crops } = useCropStore.getState();

export async function insertCrop(
  supabase: SupabaseClient,
  crop: CropFormData,
  userId: string,
) {
  if (!userId) throw new Error("Usuario no autenticado");

  const cropData = {
    plant_name: crop.plantName,
    plant_type: crop.plantType,
    start_date: crop.startDate,
    description: crop.description,
    system_type: crop.systemType,
    target_ph: crop.targetPh,
    auto_reminders: crop.autoReminders,
    water_change_frequency: crop.waterChangeFrequency,
    nutrients_frequency: crop.nutrientsFrequency,
    ph_check_frequency: crop.phCheckFrequency,
    user_id: userId,
  };

  const { data, error } = await supabase
    .from("crops")
    .insert([cropData])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function getUserCrops(supabase: SupabaseClient, userId: string) {
  if (!userId) throw new Error("Usuario no autenticado");

  const { data, error } = await supabase
    .from("crops")
    .select("*")
    .eq("user_id", userId);

  if (error) throw new Error(error.message);

  setCrops(data as Crop[]);

  return data;
}
