export interface WikipediaEntry {
	text: string;
	year: number;
}

export interface WikipediaEntryData {
	selected: {
		text: string;
		year: number;
	}[];
}
