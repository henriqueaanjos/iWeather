
import clearDay from '@assets/clear_day.svg'
import { Day } from '.';
import { render, screen } from '@testing-library/react-native';
describe('Component: Day', () => {
    it('should be rendered', () => {
        const props = {
            day: '18/07',
            min: '30°C',
            max: '34°C',
            icon: clearDay, // Importar e usar o componente SVG dos assets
            weather: 'Céu limpo',
        }; 
        render(<Day data={props}/>);
        const textElement = screen.getByText('18/07');
        expect(textElement).toBeTruthy();
    })
})