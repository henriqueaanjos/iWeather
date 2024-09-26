import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api"
import { Dashboard } from ".";
import { render, waitFor, screen, waitForElementToBeRemoved, fireEvent, act } from "@__tests__/utils/customRender";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";

describe('Screen: Dashboard', () => {
    beforeAll(async () => {
        const city = {
            id: '1',
            name: 'Rio do Sul, BR',
            latitude: 123,
            longitude: 456
        };
        
        await saveStorageCity(city);
    })
    it('should show city Weather', async() => {
        jest.spyOn(api, 'get').mockResolvedValue({data : mockWeatherAPIResponse});
        
        render(<Dashboard/>);

        const cityName = await waitFor(() => screen.getByText(/^rio do sul/i));
        expect(cityName).toBeTruthy();
    });
    it('should show another city weather', async () => {
        jest.spyOn(api, 'get').mockResolvedValueOnce({data : mockWeatherAPIResponse})
        .mockResolvedValueOnce({data : mockCityAPIResponse})
        .mockResolvedValueOnce({data : mockWeatherAPIResponse});

        render(<Dashboard/>);

        await waitForElementToBeRemoved(() => screen.queryByTestId('loading'));

        await waitFor(() => act(() =>{
            const input = screen.getByTestId('searchInput');
            fireEvent.changeText(input, 'São Paulo');
        }));

        await waitFor(() => act(() => {
            const option = screen.getByText(/são paulo/i);
            fireEvent.press(option);
        }));
        const cityName = screen.getByText(/são paulo/i);
        expect(cityName).toBeTruthy();


    })
})