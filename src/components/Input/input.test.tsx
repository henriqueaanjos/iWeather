import { render, screen } from '@testing-library/react-native'
import { Input } from '@components/Input';

describe("Component: Input", () => {
    it("should render without ActivityIndicator", () => {
        render(<Input />);
        const activityIndicator = screen.queryByTestId('activity-indicator');
        expect(activityIndicator).toBeNull();
    });
    it("should render with ActivityIndicator", () => {
        render(<Input isLoading />);
        const activityIndicator = screen.queryByTestId('activity-indicator');
        expect(activityIndicator).toBeTruthy();
    });
})