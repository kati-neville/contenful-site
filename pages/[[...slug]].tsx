import {
	GetAllPagesQuery,
	GetSinglePageQuery,
	GetSinglePageQueryVariables,
	Page,
} from "@/gql";
import { apiClient } from "@/utils/api-client";
import { getAllPagesQuery, getSinglePageQuery } from "@/queries/getAllPages";
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next";

import {
	SectionsList,
	resolveSectionComponents,
} from "@/utils/resolveSectionComponents";
import { getRenderedComponent } from "@/utils/renderPageComponent";

export default function Home({ sections }: { sections: SectionsList }) {
	return (
		<>
			{sections?.map(section => {
				return getRenderedComponent(section);
			})}
		</>
	);
}

export const getStaticProps: GetStaticProps = async ctx => {
	const params = ctx.params?.["slug"] as string[];

	function getContentfulSlug(params: string[]) {
		if (params.length === 0) {
			return "/";
		}

		const slug = params.join("/");

		if (slug.startsWith("/")) {
			return slug;
		}

		return `/${slug}`;
	}

	const result = await apiClient.request<
		GetSinglePageQuery,
		GetSinglePageQueryVariables
		// if no params, then send / for home page
	>(getSinglePageQuery, { slug: getContentfulSlug(params ?? []) });

	const page = result?.pageCollection?.items?.[0];

	const sections = await resolveSectionComponents(page as Page);

	return {
		props: {
			page,
			sections,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const result = await apiClient.request<GetAllPagesQuery>(getAllPagesQuery);

	function getParamsFromSlug(itemSlug: string) {
		if (itemSlug === "/") {
			return undefined;
		}

		return itemSlug
			.split("/")
			.filter(slug => slug !== undefined && slug !== "");
	}

	const paths: GetStaticPathsResult["paths"] =
		result.pageCollection?.items?.map(item => {
			return {
				params: {
					slug: getParamsFromSlug(item?.slug as string),
				},
			};
		}) ?? [];

	return {
		paths,
		fallback: false,
	};
};
