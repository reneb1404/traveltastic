import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function HomePage() {
	return (
		<>
			<section className="min-h-screen bg-[radial-gradient(hsl(130,100%,54%,40%),hsl(133,100%,35%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
				<h1 className="text-4xl lg:text-6xl xl:text-8xl font-bold tracking-tight m-4">
					Plan smarter, Travel further
				</h1>
				<p className="text-lg lg:text-3xl max-w-screen-xl">
					Optimize your Itineraries with Traveltastic and make the most out of
					your Trips!
				</p>
				<Button className="text-lg p-6 rounded-xl flex gap-2">
					Get started for free
					<ArrowRight className="size-5" />
				</Button>
			</section>
			<section id="pricing" className="px-8 py-16 bg-accent/5">
				<h2 className="text-4xl text-center text-balance font-semibold mb-8">
					Travel Planner which helps you plan your future Trips!
				</h2>
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
					{subscriptionTiersInOrder.map((tier) => (
						<PricingCard key={tier.name} {...tier} />
					))}
				</div>
			</section>
			<footer className="container pt-16 pb-8 flex sm:flex-col gap-8 sm:gap-4 justify-between items-start">
				<Link href="/">
					<BrandLogo />
				</Link>
				<div className="flex flex-col sm:flex-row gap-8">
					<div className="flex flex-col gap-8">
						<FooteLinkGroup
							title="Help"
							links={[
								{ label: "Title 1", href: "/title1" },
								{ label: "Title 2", href: "/title2" },
							]}
						/>
					</div>
				</div>
			</footer>
		</>
	);
}

function PricingCard({
	name,
	priceInCents,
	maxNumberOfItineraries,
	hasBasicPlanningTools,
	hasTravelTipsAndGuides,
	hasAds,
	canCollaborate,
	hasOfflineAccess,
	hasAIFeatures,
	hasRewardsProgram,
}: (typeof subscriptionTiersInOrder)[number]) {
	const isMostPopular = name === "Premium";
	return (
		<Card>
			<CardHeader>
				<div className="font-semibold mb-8">{name}</div>
				<CardTitle className="text-xl font-bold">
					${priceInCents / 100} /mo
				</CardTitle>
				<CardDescription>
					{maxNumberOfItineraries}{" "}
					{maxNumberOfItineraries === "1" ? "Itinerary" : "Itineraries"}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button
					variant={isMostPopular ? "accent" : "default"}
					className="text-lg w-full rounded-xl"
				>
					<Link href="/auth/login">Get started</Link>
				</Button>
			</CardContent>
			<CardFooter className="flex flex-col gap-4 items-start">
				{hasBasicPlanningTools && (
					<Feature>Basic travel planning tools</Feature>
				)}
				{hasTravelTipsAndGuides && (
					<Feature>General travel tips and guides</Feature>
				)}
				{canCollaborate && (
					<Feature>Collaborative planning for group trips</Feature>
				)}
				{hasOfflineAccess && (
					<Feature>Offline access to plans and notes</Feature>
				)}
				{hasRewardsProgram && <Feature>Rewards program</Feature>}
				{hasAIFeatures && <Feature>AI-powered itinerary suggestions</Feature>}
				{hasAds && <Feature>Ads included</Feature>}
			</CardFooter>
		</Card>
	);
}

function Feature({ children }: { children: ReactNode; className?: string }) {
	return (
		<div className={cn("flex items-center gap-2")}>
			<CheckIcon className="size-4 stroke-primary bg-primary/25 rounded-full p-0.5" />
			<span>{children}</span>
		</div>
	);
}

function FooteLinkGroup({
	title,
	links,
}: {
	title: string;
	links: { label: string; href: string }[];
}) {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="font-semibold">{title}</h3>
			<ul className="flex flex-col gap-2 text-sm">
				{links.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
