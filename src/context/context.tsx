import React, { ReactNode, useCallback, useContext, useState } from "react";

// eslint-disable-next-line import/no-unresolved
import { sortDataByYear } from "../helpers";
// eslint-disable-next-line import/no-unresolved
import { WikipediaEntry } from "../models";
import { fetchWikipediaData } from "./utils.ts";

type AppState = {
	loading: boolean;
	error: string;
	entries: WikipediaEntry[]; // More specific type can be used if data structure is known
	buttonClick: () => void;
};

const AppContext = React.createContext<AppState | null>(null);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [entries, setEntries] = useState<WikipediaEntry[]>([]);

	const fetchData = async () => {
		setLoading(true);
		try {
			const entries = await fetchWikipediaData();
			setEntries(sortDataByYear(entries));
		} catch (error) {
			setError("Failed to fetch data from Wikipedia. Please try again later.");
		} finally {
			setLoading(false);
		}
	};

	const buttonClick = useCallback(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				loading,
				error,
				entries,
				buttonClick,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
