import { render, screen } from '@testing-library/react';

describe(`Tests for the login page`, () => {

    beforeEach(() => {
        render(<Login />);
    });

    test(`it should render a username input and label`, () => {
        expect(screen.getByPlaceholderText(`Username...`)).toBeInTheDocument();
    });

    test(`it should render a password input and label`, () => {
        expect(screen.getByPlaceholderText(`Password...`)).toBeInTheDocument();
    });

    test(`it should render a login button`, () => {
        expect(screen.getByText(`Login`)).toBeInTheDocument();
    });
});