import {
	GetAllPagesQuery,
	GetComponentFaqQuery,
	GetComponentFaqQueryVariables,
	GetComponentFeaturesQuery,
	GetComponentFeaturesQueryVariables,
	GetComponentFooterQuery,
	GetComponentFooterQueryVariables,
	GetComponentHeadQuery,
	GetComponentHeadQueryVariables,
	GetComponentNavigationQuery,
	GetComponentNavigationQueryVariables,
	GetComponentPartnersQuery,
	GetComponentPartnersQueryVariables,
	GetComponentPricingPackagesQuery,
	GetComponentPricingPackagesQueryVariables,
	GetComponentTestimonialQuery,
	GetComponentTestimonialQueryVariables,
	GetSinglePageQuery,
	GetSinglePageQueryVariables,
	Maybe,
	Page,
} from "@/gql";
import {
	getComponentFAQ,
	getComponentFeature,
	getComponentFooter,
	getComponentHead,
	getComponentNavigation,
	getComponentPartners,
	getComponentPricingPlan,
	getComponentTestimonial,
} from "@/queries/getComponents";
import { apiClient } from "./api-client";

export type SectionsList = Array<
	| GetComponentFeaturesQuery["componentFeatures"]
	| GetComponentFooterQuery["componentFooter"]
	| GetComponentHeadQuery["componentHead"]
	| GetComponentNavigationQuery["navigationBar"]
	| GetComponentPartnersQuery["componentPartners"]
	| GetComponentFaqQuery["componentFrequentlyAskedQuestions"]
	| GetComponentTestimonialQuery["componentTestimonial"]
	| GetComponentPricingPackagesQuery["componentPricingPackages"]
>;

export async function resolveSectionComponents(page?: Maybe<Page>) {
	const sections: SectionsList = [];

	if (!page) {
		return sections;
	}

	for (const section of page?.sectionsCollection?.items ?? []) {
		switch (section?.__typename) {
			case "ComponentFeatures":
				const featureComponent = await apiClient.request<
					GetComponentFeaturesQuery,
					GetComponentFeaturesQueryVariables
				>(getComponentFeature, {
					id: section?.sys?.id,
				});

				sections.push(featureComponent.componentFeatures);

				break;
			case "NavigationBar":
				const navbarComponent = await apiClient.request<
					GetComponentNavigationQuery,
					GetComponentNavigationQueryVariables
				>(getComponentNavigation, {
					id: section?.sys?.id,
				});

				sections.push(navbarComponent.navigationBar);

				break;
			case "ComponentFooter":
				const footerComponent = await apiClient.request<
					GetComponentFooterQuery,
					GetComponentFooterQueryVariables
				>(getComponentFooter, {
					id: section?.sys?.id,
				});

				sections.push(footerComponent.componentFooter);
				break;
			case "ComponentPartners":
				const partnersComponent = await apiClient.request<
					GetComponentPartnersQuery,
					GetComponentPartnersQueryVariables
				>(getComponentPartners, {
					id: section?.sys?.id,
				});

				sections.push(partnersComponent.componentPartners);
				break;
			case "ComponentFrequentlyAskedQuestions":
				const faqComponent = await apiClient.request<
					GetComponentFaqQuery,
					GetComponentFaqQueryVariables
				>(getComponentFAQ, {
					id: section?.sys?.id,
				});

				sections.push(faqComponent.componentFrequentlyAskedQuestions);
				break;
			case "ComponentHead":
				const headComponent = await apiClient.request<
					GetComponentHeadQuery,
					GetComponentHeadQueryVariables
				>(getComponentHead, {
					id: section?.sys?.id,
				});

				sections.push(headComponent.componentHead);

				break;
			case "ComponentTestimonial":
				const testimonialComponent = await apiClient.request<
					GetComponentTestimonialQuery,
					GetComponentTestimonialQueryVariables
				>(getComponentTestimonial, {
					id: section?.sys?.id,
				});

				sections.push(testimonialComponent.componentTestimonial);

				break;
			case "ComponentPricingPackages":
				const pricingPlanComponent = await apiClient.request<
					GetComponentPricingPackagesQuery,
					GetComponentPricingPackagesQueryVariables
				>(getComponentPricingPlan, {
					id: section?.sys?.id,
				});

				sections.push(pricingPlanComponent.componentPricingPackages);

			default:
				break;
		}
	}

	return sections;
}
