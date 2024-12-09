import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { subscriptionTiersInOrder } from "@/data/subscriptionData";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function HomePage() {
	return (
		<>
			<section className="min-h-screen bg-[radial-gradient(hsl(133,64%,38%,40%),hsl(119,68%,49%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
				<h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
					Plan smarter, Travel further!
				</h1>
				<p className="text-lg lg:text-3xl xl:text-4xl max-w-screen-xl">
					Traveltastic - One travel app is all you need!
				</p>
				<div>
					<Link href="/auth/signup">
						<Button className="text-lg p-6 rounded-lg flex gap-2">
							Get started for free <ArrowRight className="size-5" />
						</Button>
					</Link>
				</div>
			</section>

			<section className="px-8 py-16">
				<h2 className="text-3xl lg:text-4xl xl:text-5xl  text-center text-balance font-semibold mb-8">
					Lorem Ipsum!
				</h2>
				<div className="flex justify-center">
					<p className="text-lg lg:text-3xl xl:text-4xl text-center max-w-screen-xl text-balance">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						ullamcorper nisl vitae pretium volutpat. Nulla sit amet commodo
						justo, nec porttitor nulla. Fusce enim tellus, gravida non erat at,
						auctor lacinia dolor. Fusce condimentum sit amet elit at egestas.
						Quisque sit amet venenatis eros. Phasellus non est nisl. Vestibulum
						tempus tincidunt egestas. Etiam in metus blandit urna mollis semper.
						Vivamus a magna dolor. Nam leo purus, porta quis egestas at, euismod
						non odio. Nullam eu libero non lectus tempor molestie eu eu augue.
						Quisque eros quam, hendrerit quis augue eu, pellentesque elementum
						lacus. Suspendisse suscipit rhoncus scelerisque. Phasellus eu est
						vel sapien ultrices eleifend. Quisque eros urna, laoreet vitae
						mauris vel, tristique fermentum nisi. Vestibulum iaculis nunc ut
						porttitor euismod. Morbi finibus ligula ut diam fringilla tincidunt.
					</p>
				</div>
			</section>
			<section className="px-8 py-16">
				<h2 className="text-xl lg:text-2xl xl:text-3xl  text-center text-balance font-semibold mb-8">
					Lorem Impsum Dolor
				</h2>
				<div className="flex justify-center">
					<p className="text-lg lg:text-xl xl:text-2xl text-center max-w-screen-xl text-balance">
						In sagittis urna quis libero pharetra, eu pharetra velit pharetra.
						Quisque molestie enim vel consectetur efficitur. Curabitur non elit
						volutpat, suscipit est vitae, auctor purus. Pellentesque sit amet ex
						laoreet, aliquam velit non, eleifend enim. Ut eu viverra odio.
						Praesent nisl neque, molestie at nulla a, porta pulvinar purus.
						Vivamus volutpat iaculis lacinia. Donec sed nibh nulla. Proin nisl
						sapien, molestie nec viverra id, porttitor nec enim. Cras at tempus
						urna. Vestibulum sit amet convallis tortor. Aliquam vitae
						pellentesque enim. Donec vitae venenatis nibh, quis accumsan massa.
						Phasellus ut eros fermentum dui congue porta. Aliquam metus ligula,
						luctus ac lacus id, laoreet facilisis erat. Vestibulum accumsan dui
						dolor, ac lacinia leo vestibulum nec. Nunc accumsan quis tortor in
						tincidunt. Mauris pellentesque non ante ac ultrices. Praesent
						bibendum consequat consequat. Aliquam erat volutpat. Aliquam quis
						blandit neque. Integer a massa mauris. Sed nec metus in augue
						condimentum pellentesque eget a lorem. Etiam ornare, mi ut efficitur
						ultricies, enim tortor elementum risus, nec congue quam nisi nec
						lectus. Pellentesque orci felis, condimentum in massa vel, egestas
						gravida erat. Pellentesque semper sit amet mauris id maximus.
						Aliquam scelerisque lacus sit amet elit euismod sagittis. Vivamus a
						venenatis elit. Curabitur viverra elit ut dignissim blandit. Nam
						nunc leo, gravida lacinia scelerisque sit amet, ultricies sed dolor.
					</p>
				</div>
			</section>
			<section className="px-8 py-16 bg-accent/5">
				<h2 className="text-4xl text-center text-balance font-semibold mb-8">
					Pricing
				</h2>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
					{subscriptionTiersInOrder.map((tier) => (
						<PricingCard key={tier.name} {...tier} />
					))}
				</div>
				<div className="flex items-center justify-center">
					<Button className="m-8 px-16 rounded-lg">All Features</Button>
				</div>
			</section>
		</>
	);
}

function PricingCard({
	name,
	priceInCents,
	maxItineraries,
	hasBasicPlanningTools,
	hasTravelTipsAndGuides,
	hasAds,
	canCollaborate,
	hasOfflineAccess,
	hasRewardsProgram,
}: (typeof subscriptionTiersInOrder)[number]) {
	const isMostPopular = name === "Premium";

	return (
		<Card
			className={cn(
				"relative shadow-none rounded-3xl overflow-hidden",
				isMostPopular ? "border-accent border-2" : "border-none"
			)}
		>
			{isMostPopular && (
				<div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
					Most popular
				</div>
			)}
			<CardHeader>
				<div className="text-accent font-semibold mb-8">{name}</div>
				<CardTitle className="text-xl font-bold">
					${priceInCents / 100} /mo
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Link href="/auth/signup">
					<Button
						className="text-lg w-full rounded-lg"
						variant={isMostPopular ? "accent" : "default"}
					>
						Get Started
					</Button>
				</Link>
			</CardContent>
			<CardFooter className="flex flex-col gap-4 items-start">
				<Feature className="font-bold">
					{maxItineraries}{" "}
					{maxItineraries === "1" ? "Itinerary" : "Itineraries"}
				</Feature>
				<Feature>PPP discounts</Feature>
				{hasBasicPlanningTools && <Feature>Basic Planning Tools</Feature>}
				{hasTravelTipsAndGuides && <Feature>Travel Tips and Guides</Feature>}
				{canCollaborate && <Feature>Callaborate with Friends</Feature>}
				{hasOfflineAccess && <Feature>Offline access</Feature>}
				{hasRewardsProgram && <Feature>Rewards Program</Feature>}
				{hasAds && <Feature>Ads</Feature>}
			</CardFooter>
		</Card>
	);
}

function Feature({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
			<span>{children}</span>
		</div>
	);
}
