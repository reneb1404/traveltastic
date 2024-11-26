export const subscriptionTiers = {
	Free: {
		name: "Free",
		priceInCents: 0,
		features: ["General travel tips and guides", "Ads included"],
		limitations: {
			itineraries: 1,
			collaboration: false,
			offline_access: false,
		},
		stripePriceId: undefined,
	},
	Pro: {
		name: "Pro",
		priceInCents: 999,
		features: [
			"Advanced packing list templates",
			"Collaborative planning for group trips",
			"Customizable budget tracker with currency conversions",
			"Ad-free experience",
			"Export plans to PDF, Excel, or other formats",
			"Offline access to plans and notes",
			"Premium travel guides and destination recommendations",
		],
		limitations: {
			itineraries: 5,
			collaboration: true,
			offline_access: true,
		},
		stripePriceId: undefined,
	},
	Premium: {
		name: "Premium",
		priceInCents: 1999,
		features: [
			"AI-powered itinerary suggestions",
			"Advanced collaboration features (live chat)",
			"Real-time flight and hotel updates",
			"Visa and document reminders",
			"Access to curated travel deals",
			"Rewards program (points for bookings)",
			"Priority customer support",
			"Personalized travel guides and concierge recommendations",
		],
		limitations: {
			itineraries: "Unlimited",
			collaboration: true,
			offline_access: true,
			priority_support: true,
		},
		stripePriceId: undefined,
	},
	Corporate: {
		name: "Corporate",
		priceInCents: 4999,
		features: [
			"Dedicated travel concierge for itinerary creation",
			"Corporate tools for team travel management",
			"Expense tracking and reporting",
			"Complimentary upgrades and lounge passes",
			"Priority booking assistance for flights and hotels",
		],
		limitations: {
			itineraries: "Unlimited",
			collaboration: true,
			offline_access: true,
			priority_support: true,
		},
		stripePriceId: undefined,
	},
} as const;

export const subTiers = {
	Free: {
		name: "Free",
		priceInCents: 0,
		maxNumberOfItineraries: "1",
		canAccessBasicTools: true,
		canAccessCollabPlanning: false,
		hasAds: true,
		hasAIFeatures: false,
		hasOfflineAccess: false,

		stripePriceId: undefined,
	},
	Pro: {
		name: "Pro",
		priceInCents: 999,
		maxNumberOfItineraries: "5",
		canAccessBasicTools: true,
		canAccessCollabPlanning: true,
		hasAds: false,
		hasAIFeatures: false,
		hasOfflineAccess: true,

		stripePriceId: undefined,
	},
	Premium: {
		name: "Premium",
		priceInCents: 2999,
		maxNumberOfItineraries: "Unlimited",
		canAccessBasicTools: true,
		canAccessCollabPlanning: true,
		hasAds: false,
		hasAIFeatures: true,
		hasOfflineAccess: true,
		stripePriceId: undefined,
	},
} as const;

export const subscriptionTiersInOrder = [
	subTiers.Free,
	subTiers.Pro,
	subTiers.Premium,
] as const;
