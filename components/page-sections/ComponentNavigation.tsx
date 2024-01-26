import { GetComponentNavigationQuery } from "@/gql";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import React, { useState } from "react";
import NextLink from "next/link";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "../elements/link";

export const ComponentNavigation = ({
	component,
}: {
	component: GetComponentNavigationQuery["navigationBar"];
}) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const centerNavigation =
		component?.centerNavigationLinksCollection?.items ?? [];
	const rightNavigation =
		component?.rightNavigationLinksCollection?.items ?? [];

	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global">
				<div className="flex lg:flex-1">
					<NextLink href="/" className="-m-1.5 p-1.5">
						{component?.logo?.url ? (
							<Image
								width={40}
								height={40}
								alt="logo"
								src={component?.logo?.url}
							/>
						) : null}
					</NextLink>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{centerNavigation.map(item => (
						//@ts-ignore
						<Link link={item} key={item?.name} />
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{rightNavigation.map(item => (
						//@ts-ignore
						<Link key={item?.__typename} link={item} />
					))}
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<Image
								width={40}
								height={40}
								src={
									component?.logo?.url ||
									"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								}
								alt="logo"
							/>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{centerNavigation.map(item => (
									<a
										key={item?.name}
										href={item?.href || "#"}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										{item?.name}
									</a>
								))}
							</div>
							<div className="py-6">
								{rightNavigation.map(item => (
									//@ts-ignore
									<Link key={item?.__typename} link={item} />
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};
