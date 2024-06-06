// eslint-disable-next-line import/no-unresolved
import { WikipediaEntry } from "../models";

export const sortDataByYear = (data: WikipediaEntry[]) => {
	data.sort((a, b) => a.year - b.year);

	return data;
};
