export const mockGlobalContext = jest.fn().mockReturnValue({
	loading: false,
	error: null,
	entries: [],
	buttonClick: jest.fn(), // Mock the buttonClick function
});
