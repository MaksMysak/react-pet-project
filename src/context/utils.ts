import axios from "axios";

// eslint-disable-next-line import/no-unresolved
import { WikipediaEntry, WikipediaEntryData } from "../models";

export const fetchWikipediaData = async () => {
	const obj = new Date();
	const day = String(obj.getDate()).padStart(2, "0");
	const month = String(obj.getMonth() + 1).padStart(2, "0");
	const url = `https://en.wikipedia.org/api/rest_v1/feed/onthisday/selected/${month}/${day}`;

	try {
		const { data } = await axios.get<WikipediaEntryData>(url);
		const pages = data.selected;
		const formattedEntries: WikipediaEntry[] = pages.map(
			(page: { text: string; year: number }) => ({
				text: page.text,
				year: page.year,
			}),
		);

		return formattedEntries; // Assuming sortDataByYear is available
	} catch (error) {
		console.error("Failed to fetch data from Wikipedia:", error);
		throw new Error("Failed to fetch Wikipedia data"); // Re-throw for error handling in AppProvider
	}
};
