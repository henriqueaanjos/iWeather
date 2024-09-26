import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { api } from "@services/api"
import { fireEvent, render, screen, waitFor } from "@testing-library/react-native";
import { Search } from ".";

describe("Screen: Search", () => {
    it("should show city option", async() => {
        jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse});
        render(<Search/>);
        const input = screen.getByTestId('searchInput');
        fireEvent.changeText(input, 'São Paulo');
        const option = await waitFor(() => screen.getByText(/^são paulo/i));

        expect(option).toBeTruthy();
    })
})