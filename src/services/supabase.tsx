import { createClient } from "@supabase/supabase-js";

const projectId =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3Y2VlZXljZmlyd3VobnF4YW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjMzMTEsImV4cCI6MjA1OTY5OTMxMX0.EoMKLhHYp6Jos32Qnz9jUjKGJYIf1rb6h41VSVxE5To";

const supabase = createClient(
  "https://rwceeeycfirwuhnqxaot.supabase.co",
  projectId
);

export default supabase;
