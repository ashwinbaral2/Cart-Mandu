'use client';

import { AdminSidebar } from "@/components/admin-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Toaster } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full ">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <Separator />
          <main className="flex-1 overflow-y-auto  p-6 bg-background">
            <SidebarTrigger />
            {children}
          </main>
          <Toaster/>
        </div>
      </div>
    </SidebarProvider>
  );
}
