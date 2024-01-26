import { GraphQLClient } from "graphql-request";

export const apiClient = new GraphQLClient(
	"https://graphql.contentful.com/content/v1/spaces/80l9mibwzu0r",
	{
		headers: {
			Authorization: "Bearer mCfeEFvLtXuCNcnZekO0orAKy_erwHkqoqeQDUPKTYk",
		},
	}
);
