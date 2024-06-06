import axios from "axios";

import { fetchWikipediaData } from "../context/utils.ts";
// eslint-disable-next-line import/no-unresolved
import { WikipediaEntry, WikipediaEntryData } from "../models"; // Assuming your models file path

jest.mock("axios"); // Mock the entire axios library

describe("fetchWikipediaData", () => {
	test("fetchWikipediaData - Fetches data successfully", async () => {
		// Mock axios response data
		const mockData: WikipediaEntryData = {
			selected: [
				{ text: "Sample Wikipedia entry text 1", year: 2023 },
				{ text: "Sample Wikipedia entry text 2", year: 2022 },
			],
		};

		jest.spyOn(axios, "get").mockResolvedValueOnce({ data: mockData });

		const entries: WikipediaEntry[] = await fetchWikipediaData();

		expect(entries).toEqual([
			{ text: "Sample Wikipedia entry text 1", year: 2023 },
			{ text: "Sample Wikipedia entry text 2", year: 2022 },
		]);
	});

	test("fetchWikipediaData - Handles network error", async () => {
		jest.spyOn(axios, "get").mockRejectedValueOnce(new Error("Network error"));
		await expect(fetchWikipediaData()).rejects.toThrowError("Failed to fetch Wikipedia data");
	});
});
