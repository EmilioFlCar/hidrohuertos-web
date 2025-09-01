"use client";
import Card from "@/components/cultivos/Card";
import NewCropCard from "@/components/cultivos/NewCropCard";
import NewCropModal from "@/components/cultivos/NewCropModal";
import { createClerkSupabaseClient } from "@/lib/supabase-client";
import { getUserCrops } from "@/services/cropService";
import { useCropStore } from "@/store/cropStore";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

function Page() {
  const client = createClerkSupabaseClient();
  const { user } = useUser();
  const { crops, setCrops } = useCropStore();

  useEffect(() => {
    if (user) {
      getUserCrops(client, user.id).then((data) => {
        setCrops(data);
      });
    }
  }, [user]);

  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-9 py-4 sm:py-8 w-full h-full min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Link href="/dashboard">
          <button className="btn btn-square bg-gray-50 hover:bg-gray-200 text-gray-900 border-gray-300 shadow-none">
            <FaArrowLeft size={16} color="black" />
          </button>
        </Link>
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black">
              Mis cultivos
            </h1>
            <h1 className="text-sm sm:text-lg text-gray-500">
              Gestiona todos tus cultivos hidropónicos activos
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-6  sm:mt-8">
        <div className="flex gap-2 sm:gap-4 justify-around w-full sm:w-auto">
          <form className="filter flex">
            <input className="btn btn-square btn-sm" type="reset" value="×" />
            <input
              className="btn btn-sm bg-white border-gray-300"
              type="radio"
              name="frameworks"
              aria-label="Todos"
            />
            <input
              className="btn btn-sm bg-white border-gray-300"
              type="radio"
              name="frameworks"
              aria-label="Lechuga"
            />
            <input
              className="btn btn-sm bg-white border-gray-300"
              type="radio"
              name="frameworks"
              aria-label="Cilantro"
            />
          </form>
        </div>
        <div className="w-full sm:w-auto">
          <NewCropModal />
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {crops.map((crop, index) => (
          <div className="flex justify-center" key={index}>
            <Card crop={crop} />
          </div>
        ))}
        <div className="flex justify-center">
          <NewCropCard key={"new"} />
        </div>
      </div>
    </div>
  );
}

export default Page;
