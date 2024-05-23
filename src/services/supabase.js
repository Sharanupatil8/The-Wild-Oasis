import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://afhansnwtkykqonelyji.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmaGFuc253dGt5a3FvbmVseWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0OTU3MDQsImV4cCI6MjAyNjA3MTcwNH0.6OnuUbf7c3aN2RAH7mJDJlBbeREyvXLlm58qVUx--Bc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
