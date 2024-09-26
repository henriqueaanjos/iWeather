import { fireEvent, render, screen } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
    it("should returning cities list", () => {
        const data = [
            {
                id: '1',
                name: 'Campinas',
                latitude: 123,
                longitude: 456
            },{
                id: '2',
                name: 'Campo Grande',
                latitude: 789,
                longitude: 987
            }
        ];

        const onPress = jest.fn();

        render(<SelectList data={data} onChange={()=> {}} onPress={onPress}/>);
        const selectCity = screen.getByText(/campo grande/i);
        fireEvent.press(selectCity);
        expect(onPress).toHaveBeenCalledWith(data[1]);
    });
    it("shouldn't returning a cities list when data is empty", () =>  {
        render(<SelectList data={[]} onChange={()=> {}} onPress={()=> {}}/>);
        const selectCity = screen.getByTestId('options');
        expect(selectCity.children).toHaveLength(0);
    })
})