import { GetComponentPartnersQuery } from "@/gql";
import Image from "next/image";
import React from "react";

export const ComponentPartners = ({
	component,
}: {
	component: GetComponentPartnersQuery["componentPartners"];
}) => {
	return (
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				{component?.partnerCollection?.items.map(item => {
					return (
						<Image
							width={158}
							height={48}
							key={item?.sys.id}
							alt={"Partner image"}
							src={item?.partnerLogo?.url || ""}
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						/>
					);
				})}
			</div>
		</div>
	);
};
