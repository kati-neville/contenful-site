import React from "react";
import NextLink from "next/link";
import { ElementLink } from "@/gql";
import Image from "next/image";

export interface LinkProps {
	link: Partial<ElementLink> | null | undefined;
}

export const Link = ({ link }: LinkProps) => {
	if (!link || !link?.href) {
		return null;
	}

	const isPrimary = link.type === "primary";

	const LinkComponent = link?.isExternal ? "a" : NextLink;

	const style = isPrimary
		? "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		: "text-sm leading-6 text-gray-900 font-bold hover:text-gray-600";

	return (
		<LinkComponent
			href={link.href}
			target={link.isExternal ? "_blank" : "_self"}
			className={`flex items-center space-x-2 ${style}`}>
			<span>{link?.name}</span>{" "}
			{link?.icon?.url ? (
				<Image src={link?.icon?.url} width={24} height={24} alt="link icon" />
			) : null}
		</LinkComponent>
	);
};
