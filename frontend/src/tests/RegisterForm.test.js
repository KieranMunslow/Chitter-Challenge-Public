import { render, screen } from '@testing-library/react';

describe(`Tests for the registration form`, () => {

    beforeEach(() => {
        render(<RegisterForm />);
    });

    test(`it should render a first name input and label`, () => {
        expect(screen.getByPlaceholderText(`First name...`)).toBeInTheDocument();
    });

    test(`it should render a surname input and label`, () => {
        expect(screen.getByLabelText(`Surname...`)).toBeInTheDocument();
    });

    test(`it should render an email input and label`, () => {
        expect(screen.getByLabelText(`Email...`)).toBeInTheDocument();
    });

    test(`it should render an username input and label`, () => {
        expect(screen.getByLabelText(`Username...`)).toBeInTheDocument();
    });

    test(`it should render an password input and label`, () => {
        expect(screen.getByLabelText(`Password...`)).toBeInTheDocument();
    });

    test(`it should render a confirm password input and label`, () => {
        expect(screen.getByLabelText(`Confirm Password...`)).toBeInTheDocument();
    });

    test(`it should render a register button`, () => {
        expect(screen.getByText(`Register`)).toBeInTheDocument();
    });
});