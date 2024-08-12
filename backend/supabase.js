const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://nqzhnsexkandjsdvjarh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xemhuc2V4a2FuZGpzZHZqYXJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNzA3MjgsImV4cCI6MjAzODc0NjcyOH0.8dN1nZePpfS0dsm4vLupyXLlhRB5UB1MuEtWH__1yz0"
);

module.exports = supabase;
