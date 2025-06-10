// services/cropService.ts
import { CropFormData } from "@/store/cropFormData";
import { SupabaseClient } from "@supabase/supabase-js";

export async function insertCrop(supabase: SupabaseClient, crop: CropFormData) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Usuario no autenticado");

  const { data, error } = await supabase
    .from("crops")
    .insert([{ ...crop, user_id: user.id }])
    .select();

  if (error) throw new Error(error.message);

  return data?.[0];
}
