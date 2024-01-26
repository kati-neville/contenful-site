import { GetComponentTestimonialQuery } from "@/gql";
import Image from "next/image";
import React from "react";

export const ComponentTestimonial = ({
	component,
}: {
	component: GetComponentTestimonialQuery["componentTestimonial"];
}) => {
	return component?.testimonialCollection?.items.map(testimonial => {
		return (
			<div
				key={testimonial?.sys.id}
				className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
					<Image
						className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
						src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
						alt=""
						width={956}
						height={638}
					/>
					<div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
					<div
						className="absolute -left-80 -top-56 transform-gpu blur-3xl"
						aria-hidden="true">
						<div
							className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
					<div
						className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
						aria-hidden="true">
						<div
							className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
					<div className="relative mx-auto max-w-2xl lg:mx-0">
						<div className="font-semibold text-white text-4xl">
							{testimonial?.title}
						</div>
						<figure>
							<blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
								<p>{testimonial?.message}</p>
							</blockquote>
							<figcaption className="mt-6 text-base text-white">
								<div className="font-semibold">{testimonial?.authorName}</div>
								<div className="mt-1">{testimonial?.authorPosition}</div>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		);
	});
};
