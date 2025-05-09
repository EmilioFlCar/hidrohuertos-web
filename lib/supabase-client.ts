import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  // {
  //   // Session accessed from Clerk SDK, either as Clerk.session (vanilla
  //   // JavaScript) or useSession (React)
  //   accessToken: async () => Session?.getToken() ?? null,
  // },
);
