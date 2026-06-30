import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { router } from "@/router";

/**
 * NOTE: BrandProvider needs router context (it reads the URL), so it is mounted
 * *inside* the router tree via RootLayout's wrapper — see main.tsx.
 */
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
