import { GetComponentPricingPackagesQuery } from "@/gql";
import { classNames } from "@/utils";
import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

export const ComponentPricingPlan = ({
	component,
}: {
	component: GetComponentPricingPackagesQuery["componentPricingPackages"];
}) => {
	const plans = component?.pricingPlansCollection?.items ?? [];

	const isPopularPlan = plans?.find(plan => plan?.isPopular);
	const isNotPopularPlan = plans?.filter(plan => !plan?.isPopular);

	const reorderedPlans = [
		isNotPopularPlan?.[0],
		isPopularPlan,
		isNotPopularPlan?.[1],
	];

	return (
		<div className="py-24 sm:pt-48">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-base font-semibold leading-7 text-indigo-600">
						{component?.caption}
					</h2>
					<p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
						{component?.title}
					</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
					{component?.description}
				</p>
				<div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{reorderedPlans?.map((plan, planIdx) => (
						<div
							key={plan?.sys.id}
							className={classNames(
								plan?.isPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
								planIdx === 0 ? "lg:rounded-r-none" : "",
								planIdx === plans?.length - 1 ? "lg:rounded-l-none" : "",
								"flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
							)}>
							<div>
								<div className="flex items-center justify-between gap-x-4">
									<h3
										id={plan?.sys.id}
										className={classNames(
											plan?.isPopular ? "text-indigo-600" : "text-gray-900",
											"text-lg font-semibold leading-8"
										)}>
										{plan?.packageName}
									</h3>
									{plan?.isPopular ? (
										<p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
											Most popular
										</p>
									) : null}
								</div>
								<p className="mt-4 text-sm leading-6 text-gray-600">
									{plan?.packageDescription}
								</p>
								<p className="mt-6 flex items-baseline gap-x-1">
									<span className="text-4xl font-bold tracking-tight text-gray-900">
										{plan?.price?.currency}
										{plan?.price?.amount}
									</span>
									<span className="text-sm font-semibold leading-6 text-gray-600">
										/{plan?.price?.period}
									</span>
								</p>
								<ul
									role="list"
									className="mt-8 space-y-3 text-sm leading-6 textw-gray-600">
									{plan?.benefits?.map(benefit => (
										<li key={benefit} className="flex gap-x-3">
											<CheckIcon
												className="h-6 w-5 flex-none text-indigo-600"
												aria-hidden="true"
											/>
											{benefit}
										</li>
									))}
								</ul>
							</div>
							<a
								href={plan?.link?.href ?? "#"}
								aria-describedby={plan?.link?.__typename}
								className={classNames(
									plan?.isPopular
										? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
										: "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
									"mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								)}>
								{plan?.link?.name || "Buy plan"}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
