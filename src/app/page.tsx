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
import { ArrowRight, CheckIcon, ListCheck } from "lucide-react";
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
		</>
	);
}

function PricingCard({
	name,
	priceInCents,
	maxNumberOfItineraries,
	canAccessBasicTools,
	canAccessCollabPlanning,
	hasAds,
	hasAIFeatures,
	hasOfflineAccess,
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
				{canAccessBasicTools && <Feature>Basic travel planning tools</Feature>}
				{canAccessCollabPlanning && (
					<Feature>Collaborative planning for group trips</Feature>
				)}
				{hasOfflineAccess && (
					<Feature>Offline access to plans and notes</Feature>
				)}
				{canAccessBasicTools && <Feature>Basic travel planning tools</Feature>}
				{hasAIFeatures && <Feature>AI-powered itinerary suggestions</Feature>}
				{hasAds && <Feature>Ads included</Feature>}
				<Feature>
					View all Features under{" "}
					<Link className="font-semibold" href="/#features">
						Features
					</Link>
				</Feature>
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

/**
 * <span className="flex items-center gap-2">
					<ListCheck className="size-4" />
					View all Features under{" "}
					<Link className="font-semibold" href="/#features">
						Features
					</Link>
				</span>
 */
