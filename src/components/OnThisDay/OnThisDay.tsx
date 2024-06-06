import "./OnThisDay.css"; // Import SCSS file

import React from "react";

import { useGlobalContext } from "../../context/context.tsx";
// eslint-disable-next-line import/no-unresolved
import { WikipediaEntry } from "../../models";

const OnThisDay: React.FC = () => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { loading, error, entries, buttonClick } = useGlobalContext();

	return (
		<div className="on-this-day">
			<h1>Wikipedia "On this day"</h1>
			<button onClick={buttonClick}>Get Info</button>
			{error && <p className="error">{error}</p>}
			{loading && entries ? (
				<p className="loading">Loading...</p>
			) : (
				<ul>
					{entries.map((entry: WikipediaEntry, index: number) => (
						<li key={index}>
							<strong>{entry.year}: </strong>
							{entry.text}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default OnThisDay;
