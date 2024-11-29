import { NavBar } from "@/components/NavBar";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
	return (
		<div className="selection:bg-[hsl(88,100%,50%,40%)]">
			<NavBar />
			{children}
		</div>
	);
}
