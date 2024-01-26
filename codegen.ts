import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: {
		"https://graphql.contentful.com/content/v1/spaces/80l9mibwzu0r": {
			headers: {
				Authorization: "Bearer mCfeEFvLtXuCNcnZekO0orAKy_erwHkqoqeQDUPKTYk",
			},
		},
	},
	documents: "queries/**/*.ts",

	generates: {
		"./gql/index.ts": {
			// preset: "client",
			plugins: ["typescript", "typescript-operations"],
		},
	},

	ignoreNoDocuments: true,
};

export default config;
