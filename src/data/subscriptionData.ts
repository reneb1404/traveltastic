const subscriptionTiers = {
	Free: {
		name: "Free",
		priceInCents: 0,
		maxItineraries: "1",
		hasBasicPlanningTools: true,
		hasTravelTipsAndGuides: true,
		hasAds: true,
		canAccessAdvancedTemplates: false,
		canCollaborate: false,
		hasOfflineAccess: false,
		hasAIFeatures: false,
		hasPremiumGuides: false,
		hasRealTimeUpdates: false,
		hasRewardsProgram: false,
		hasCorporateTools: false,
		stripePriceId: null,
	},
	Basic: {
		name: "Basic",
		priceInCents: 999,
		maxItineraries: "3",
		hasBasicPlanningTools: true,
		hasTravelTipsAndGuides: true,
		hasAds: false,
		canAccessAdvancedTemplates: true,
		canCollaborate: false,
		hasOfflineAccess: true,
		hasAIFeatures: false,
		hasPremiumGuides: true,
		hasRealTimeUpdates: false,
		hasRewardsProgram: false,
		hasCorporateTools: false,
		stripePriceId: null,
	},
	Premium: {
		name: "Premium",
		priceInCents: 1999,
		maxItineraries: "10",
		hasBasicPlanningTools: true,
		hasTravelTipsAndGuides: true,
		hasAds: false,
		canAccessAdvancedTemplates: true,
		canCollaborate: true,
		hasOfflineAccess: true,
		hasAIFeatures: true,
		hasPremiumGuides: true,
		hasRealTimeUpdates: true,
		hasRewardsProgram: true,
		hasCorporateTools: false,
		stripePriceId: null,
	},
	Corporate: {
		name: "Corporate",
		priceInCents: 2999,
		maxItineraries: "Unlimited",
		hasBasicPlanningTools: true,
		hasTravelTipsAndGuides: true,
		hasAds: false,
		canAccessAdvancedTemplates: true,
		canCollaborate: true,
		hasOfflineAccess: true,
		hasAIFeatures: true,
		hasPremiumGuides: true,
		hasRealTimeUpdates: true,
		hasRewardsProgram: true,
		hasCorporateTools: true,
		stripePriceId: null,
	},
} as const;

export const subscriptionTiersInOrder = [
	subscriptionTiers.Free,
	subscriptionTiers.Basic,
	subscriptionTiers.Premium,
	subscriptionTiers.Corporate,
] as const;