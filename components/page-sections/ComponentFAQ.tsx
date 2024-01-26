import React from "react";
import { GetComponentFaqQuery } from "@/gql";

export const ComponentFAQ = ({
	component,
}: {
	component: GetComponentFaqQuery["componentFrequentlyAskedQuestions"];
}) => {
	return (
		<div className="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
			<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
				{component?.title}
			</h2>
			<dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
				{component?.askedQuestionAndAnswersCollection?.items.map(faq => (
					<div
						key={faq?.sys.id}
						className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
						<dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
							{faq?.question}
						</dt>
						<dd className="mt-4 lg:col-span-7 lg:mt-0">
							<p className="text-base leading-7 text-gray-600">
								{faq?.response}
							</p>
						</dd>
					</div>
				))}
			</dl>
		</div>
	);
};
