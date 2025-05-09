"use client";
import { Fragment, useEffect, useState } from "react";
import { useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Course from "@/components/landing/Course";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import Benefits from "@/components/landing/Benefits";

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
    // <div>
    //   <h1>Saludos</h1>

    //   {loading && <p>Loading...</p>}

    //   {!loading &&
    //     saludos.length > 0 &&
    //     saludos.map((saludo: any) => <p key={saludo.id}>{saludo.name}</p>)}

    //   {!loading && saludos.length === 0 && <p>No tasks found</p>}

    //   <form onSubmit={createSaludo}>
    //     <input
    //       autoFocus
    //       type="text"
    //       name="name"
    //       placeholder="Enter new task"
    //       onChange={(e) => setName(e.target.value)}
    //       value={name}
    //     />
    //     <button type="submit">Add</button>
    //   </form>
    // </div>
    <>
      <Header />
      <Hero />
      <Course />
      <HowItWorks />
      <Benefits />
      <Footer />
    </>
  );
}
