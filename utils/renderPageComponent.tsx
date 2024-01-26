import { SectionsList } from "./resolveSectionComponents";
import { ComponentFAQ } from "@/components/page-sections/ComponentFAQ";
import { ComponentFeatures } from "@/components/page-sections/ComponentFeatures";
import { ComponentFooter } from "@/components/page-sections/ComponentFooter";
import { ComponentHero } from "@/components/page-sections/ComponentHero";
import { ComponentNavigation } from "@/components/page-sections/ComponentNavigation";
import { ComponentPartners } from "@/components/page-sections/ComponentPartners";
import { ComponentPricingPlan } from "@/components/page-sections/ComponentPricingPlan";
import { ComponentTestimonial } from "@/components/page-sections/ComponentTestimonial";

export function getRenderedComponent(section: SectionsList[0]) {
	switch (section?.__typename) {
		case "ComponentFrequentlyAskedQuestions":
			return <ComponentFAQ component={section} />;
		case "ComponentFooter":
			return <ComponentFooter component={section} />;
		case "ComponentPricingPackages":
			return <ComponentPricingPlan component={section} />;
		case "NavigationBar":
			return <ComponentNavigation component={section} />;
		case "ComponentHead":
			return <ComponentHero component={section} />;
		case "ComponentPartners":
			return <ComponentPartners component={section} />;
		case "ComponentFeatures":
			return <ComponentFeatures component={section} />;
		case "ComponentTestimonial":
			return <ComponentTestimonial component={section} />;

		default:
			return null;
	}
}
