
import dropIcon from '@assets/drop.svg'
import { WeatherItem } from '.'
import { render, screen } from '@testing-library/react-native'

describe("Component: WeatherItem", () => {
    it("should be rendered", () => {
        render(
            <WeatherItem 
                icon={dropIcon}
                title='Umidade do Ar'
                value="81%" 
            />
        );
        const title = screen.getByText('Umidade do Ar');
        const value = screen.getByText('81%');
        expect(title).toBeTruthy();
        expect(value).toBeTruthy();
    })
})