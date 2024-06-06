import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
	return {
		preset: "ts-jest",
		verbose: true,
		testEnvironment: "jsdom",
		moduleNameMapper: {
			// Adjust paths as per your project structure
			"^@/components/(.*)$": "<rootDir>/src/components/$1",
			"^@/context/(.*)$": "<rootDir>/src/context/$1",
			"^@/models/(.*)$": "<rootDir>/src/models/$1",
			"\\.(css)$": "<rootDir>/src/components/__mocks__/styleMock.js",
		},
		resolver: undefined,
	};
};
