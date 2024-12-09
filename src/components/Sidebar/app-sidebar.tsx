"use client";

import {
	Banknote,
	CircleUserRound,
	Frame,
	Map,
	PieChart,
	SquareTerminal,
} from "lucide-react";
import * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { NavFavorites } from "./nav-favorites";
import { NavLogo } from "./nav-logo";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
	user: {
		name: "Rene Bucher",
		email: "renebucher1337@gmail.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Product",
			url: "#features",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "Plan",
				},
				{
					title: "Itinerary planner",
					url: "itinerary-planner",
				},
				{
					title: "Budget planner",
					url: "budget-planner",
				},
				{
					title: "Packing list",
					url: "packing-list",
				},
			],
		},
		{
			title: "Features",
			url: "#",
			icon: Banknote,
		},
		{
			title: "Blog",
			url: "#",
			icon: CircleUserRound,
		},
	],
	favorites: [
		{
			name: "Favorites 1",
			url: "#",
			icon: Frame,
		},
		{
			name: "Favorites 2",
			url: "#",
			icon: PieChart,
		},
		{
			name: "Favorites 3",
			url: "#",
			icon: Map,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<NavLogo />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavFavorites favorites={data.favorites} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
