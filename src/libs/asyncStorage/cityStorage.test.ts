import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage";

describe("Storage: CityStorage", () => {
    it('should return city from Storage', async() => {
        const city: CityProps = {
            id: '1',
            name: 'São Paulo',
            latitude: 123,
            longitude: 456
        }
        await saveStorageCity(city);
        const response = await getStorageCity();
        expect(response).toEqual(city);

    });
    it('should return null if city not exists in Storage', async() => {
        const response = await getStorageCity();
        expect(response).toBeNull();
    });
    it('should remove city from Storage', async() => {
        const city: CityProps = {
            id: '1',
            name: 'São Paulo',
            latitude: 123,
            longitude: 456
        }
        await saveStorageCity(city);
        const response = await getStorageCity();
        expect(response).toEqual(city);
        await removeStorageCity();
        const response2 = await getStorageCity();
        expect(response2).toBeNull();
    });
})