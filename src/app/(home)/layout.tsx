import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div className="selection:bg-[hsl(88,100%,50%,20%)]">
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<main>{children}</main>
				</SidebarInset>
			</SidebarProvider>
		</div>
	);
}
