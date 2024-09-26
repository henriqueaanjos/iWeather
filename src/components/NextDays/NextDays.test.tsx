import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";

import clearDay from '@assets/clear_day.svg';

describe('Component: NextDays', () => {
    it('should be rendered', () => {
        const mockData = [
            { day: '18/07', min: '30ºC', max: '34ºC', icon: clearDay, weather: 'Céu limpo' },
            { day: '19/07', min: '25ºC', max: '29ºC', icon: clearDay, weather: 'Nublado' },
            { day: '20/07', min: '23ºC', max: '28ºC', icon: clearDay, weather: 'Chuva fraca' },
            { day: '21/07', min: '31ºC', max: '34ºC', icon: clearDay, weather: 'Céu limpo' },
            { day: '22/07', min: '30ºC', max: '32ºC', icon: clearDay, weather: 'Céu limpo' },
        ];
        render(<NextDays data={mockData} />);
        const text = screen.getByText('19/07');
        expect(text).toBeTruthy();
    })
})