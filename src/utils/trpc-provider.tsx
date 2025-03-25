"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/trpc/router";

const trpc = createTRPCReact<AppRouter>();

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: "/api/trpc",
        }),
    ],
});

export function TRPCProvider({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <trpc.Provider client={trpcClient} queryClient={queryClient}>
                {children}
            </trpc.Provider>
        </QueryClientProvider>
    );
}
