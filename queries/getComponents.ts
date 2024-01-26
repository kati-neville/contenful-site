export const getComponentFooter = /* GraphQL */ `
	query getComponentFooter($id: String!) {
		componentFooter(id: $id) {
			__typename
			sys {
				id
			}
			logo {
				url
			}
			columnsCollection {
				items {
					sys {
						id
					}
					title
					linksCollection {
						items {
							sys {
								id
							}
							name
							href
							isExternal
						}
					}
				}
			}
		}
	}
`;

export const getComponentNavigation = /* GraphQL */ `
	query getComponentNavigation($id: String!) {
		navigationBar(id: $id) {
			__typename
			sys {
				id
			}
			logo {
				url
				width
				height
			}
			centerNavigationLinksCollection {
				items {
					isExternal
					name
					href
					type
					icon {
						width
						height
						url
					}
				}
			}
			rightNavigationLinksCollection {
				items {
					isExternal
					name
					href
					type
					icon {
						width
						height
						url
					}
				}
			}
		}
	}
`;

export const getComponentFeature = /* GraphQL */ `
	query getComponentFeatures($id: String!) {
		componentFeatures(id: $id) {
			__typename
			sys {
				id
			}
			title
			caption
			description
			featureCollection {
				items {
					sys {
						id
					}
					title
					description
					icon {
						url
					}
				}
			}
		}
	}
`;

export const getComponentFAQ = /* GraphQL */ `
	query getComponentFAQ($id: String!) {
		componentFrequentlyAskedQuestions(id: $id) {
			__typename
			sys {
				id
			}
			title
			askedQuestionAndAnswersCollection {
				items {
					sys {
						id
					}
					question
					response
				}
			}
		}
	}
`;

export const getComponentPartners = /* GraphQL */ `
	query getComponentPartners($id: String!) {
		componentPartners(id: $id) {
			__typename
			sys {
				id
			}
			partnerCollection {
				items {
					sys {
						id
					}
					partnerLogo {
						url
					}
				}
			}
		}
	}
`;

export const getComponentPricingPlan = /* GraphQL */ `
	query getComponentPricingPackages($id: String!) {
		componentPricingPackages(id: $id) {
			__typename
			sys {
				id
			}
			title
			caption
			description
			pricingPlansCollection {
				items {
					sys {
						id
					}
					packageName
					packageDescription
					isPopular
					benefits
					price {
						amount
						currency
						period
					}
					link {
						icon {
							url
						}
						href
						isExternal
						name
						iconPosition
					}
				}
			}
		}
	}
`;

export const getComponentTestimonial = /* GraphQL */ `
	query getComponentTestimonial($id: String!) {
		componentTestimonial(id: $id) {
			__typename
			sys {
				id
			}
			testimonialCollection {
				items {
					sys {
						id
					}
					authorName
					authorPosition
					message
					icon {
						url
					}
					title
				}
			}
		}
	}
`;

export const getComponentHead = /* GraphQL */ `
	query getComponentHead($id: String!) {
		componentHead(id: $id) {
			__typename
			sys {
				id
			}
			title
			description
			primaryActionLink {
				name
				href
				isExternal
				type
			}
			secondaryActionLink {
				name
				href
				isExternal
				type
			}
			landingImage {
				url
				width
				height
			}
		}
	}
`;
