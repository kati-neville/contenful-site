import { GetComponentFooterQuery } from "@/gql";
import { Link } from "../elements/link";
import Image from "next/image";
import NextLink from "next/link";

function chunkColumns<T>(inputArray: T[], perChunk: number): T[][] {
	return inputArray.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / perChunk);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, [] as T[][]);
}

export function ComponentFooter({
	component,
}: {
	component: GetComponentFooterQuery["componentFooter"];
}) {
	const columns = chunkColumns(component?.columnsCollection?.items ?? [], 2);

	return (
		<div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
			<footer
				aria-labelledby="footer-heading"
				className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32">
				<h2 id="footer-heading" className="sr-only">
					Footer
				</h2>
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					{component?.logo?.url ? (
						<Image
							width={30}
							height={30}
							alt="Logo"
							src={component?.logo?.url}
						/>
					) : null}
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						{columns.map((columnGroup, idx) => (
							<div key={idx} className="md:grid md:grid-cols-2 md:gap-8">
								{columnGroup.map((column, position) => (
									<div
										key={column?.title}
										className={position > 0 ? "mt-10 md:mt-0" : ""}>
										<h3 className="text-sm font-semibold leading-6 text-gray-900">
											{column?.title}
										</h3>
										<ul role="list" className="mt-6 space-y-4">
											{column?.linksCollection?.items.map(link =>
												link && link?.href ? (
													<li key={link.name}>
														<a
															href={link?.href || "#"}
															target={link?.isExternal ? "_blank" : "_self"}
															className="text-sm leading-6 text-gray-600 hover:text-gray-900">
															{link?.name}
														</a>
													</li>
												) : null
											)}
										</ul>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</footer>
		</div>
	);
}
