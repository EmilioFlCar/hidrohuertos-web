"use client";
import { useEffect, useState } from "react";
import { useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import Hero from "@/components/landing/Hero";
import Course from "@/components/landing/Course";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import Benefits from "@/components/landing/Benefits";
import Header from "@/components/Header";

export default function Home() {
  const [saludos, SetSaludos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  // The `useUser()` hook is used to ensure that Clerk has loaded data about the signed in user
  const { user } = useUser();
  // The `useSession()` hook is used to get the Clerk session object
  // The session object is used to get the Clerk session token
  const { session } = useSession();

  // Create a custom Supabase client that injects the Clerk session token into the request headers
  function createClerkSupabaseClient() {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!,
      {
        async accessToken() {
          return session?.getToken() ?? null;
        },
      },
    );
  }

  // Create a `client` object for accessing Supabase data using the Clerk token
  const client = createClerkSupabaseClient();

  // This `useEffect` will wait for the User object to be loaded before requesting
  // the tasks for the signed in user
  useEffect(() => {
    if (!user) return;

    async function loadSaludos() {
      setLoading(true);
      const { data, error } = await client.from("saludos").select();
      if (!error) SetSaludos(data);
      setLoading(false);
    }

    loadSaludos();
  }, [user]);

  async function createSaludo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Insert task into the "tasks" database
    await client.from("saludos").insert({
      name,
    });
    window.location.reload();
  }

  return (
    <>
      <Header variant="landing" />
      <Hero />
      <Course />
      <HowItWorks />
      <Benefits />
      <Footer />
    </>
  );
}
