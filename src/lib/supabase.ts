import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
  }
};

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
  }
};

export const signUp = async (name: string, email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
      emailRedirectTo: `${location.origin}/api/auth/callback`,
    },
  });
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
  }
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
  }
};

export const googleSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
  }
};

export const githubSignIn = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
  if (error) {
    console.error(error);
  } else if (data) {
    console.log(data);
  }
};
