export const getAllPagesQuery = /* GraphQL */ `
	query getAllPages {
		pageCollection {
			items {
				sys {
					id
				}
				slug
			}
		}
	}
`;

export const getSinglePageQuery = /* GraphQL */ `
	query getSinglePage($slug: String!) {
		pageCollection(where: { slug: $slug }) {
			items {
				sys {
					id
				}
				title

				sectionsCollection {
					items {
						... on ComponentFooter {
							__typename
							sys {
								id
							}
						}

						... on ComponentFrequentlyAskedQuestions {
							__typename
							sys {
								id
							}
						}

						... on ComponentFeatures {
							__typename
							sys {
								id
							}
						}

						... on ComponentPartners {
							__typename
							sys {
								id
							}
						}

						... on ComponentHead {
							__typename
							sys {
								id
							}
							title
						}

						... on ComponentTestimonial {
							__typename
							sys {
								id
							}
						}

						... on ComponentPricingPackages {
							__typename
							sys {
								id
							}
						}

						... on NavigationBar {
							__typename
							sys {
								id
							}
						}
					}
				}
			}
		}
	}
`;
